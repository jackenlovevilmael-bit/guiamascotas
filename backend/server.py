from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

# Create the main app without a prefix
app = FastAPI(title="GuiaMascotas API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class LeadCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: EmailStr
    pet_type: Optional[str] = None
    message: Optional[str] = None


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    pet_type: Optional[str] = None
    message: Optional[str] = None
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=2000)
    session_id: Optional[str] = None


class ChatResponse(BaseModel):
    reply: str
    session_id: str


SYSTEM_PROMPT = (
    "Eres VetBot, el asistente virtual experto de GuiaMascotas.com. "
    "Tu misión es orientar a dueños de cualquier mascota común (perros, gatos, aves, "
    "roedores, conejos, reptiles, peces, anfibios, exóticos) sobre primeros auxilios, "
    "cuidados generales, alimentación, comportamiento y problemas de salud frecuentes, "
    "en español claro y empático.\n\n"
    "Cuando un usuario describa síntomas o un caso ('mi gato no come', 'mi perro tose'), "
    "haz una evaluación estructurada y completa basándote en tu conocimiento veterinario, "
    "siguiendo este formato:\n"
    "1. **Posibles causas** — lista 3-5 causas frecuentes, de más a menos probable.\n"
    "2. **Señales de alarma** — qué signos exigen ir AL VETERINARIO YA.\n"
    "3. **Qué puedes hacer en casa** — pasos prácticos numerados y seguros.\n"
    "4. **Cuándo consultar al veterinario** — plazos concretos (ej. 'si en 24h no mejora').\n\n"
    "Reglas estrictas:\n"
    "• Siempre recuerda que NO sustituyes la atención veterinaria profesional.\n"
    "• Ante signos graves (dificultad respiratoria, convulsiones, envenenamiento, golpe de calor, "
    "sangrado abundante, traumatismos, parto complicado), insiste en ACUDIR DE INMEDIATO a urgencias.\n"
    "• Nunca recomiendes medicamentos humanos (ibuprofeno, paracetamol, aspirina) ni dosis específicas.\n"
    "• Si no tienes información suficiente, pregunta detalles (especie, edad, peso, duración, antecedentes).\n"
    "• Si la mascota es exótica (reptil, ave, pez), recuerda que requiere veterinario especializado.\n"
    "• Tono amable, profesional y tranquilizador. Sin alarmismo innecesario.\n"
    "• Sé generoso con la información útil. Cuando el usuario pida saber sobre una raza/especie, "
    "incluye temperamento, cuidados, alimentación, esperanza de vida y problemas comunes.\n"
    "• Usa markdown para resaltar puntos clave. Mantén respuestas concisas pero completas (8-15 líneas)."
)


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "GuiaMascotas API en línea"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "guiamascotas"}


# Leads
@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    lead = Lead(
        name=payload.name.strip(),
        email=payload.email,
        pet_type=payload.pet_type,
        message=payload.message,
    )
    await db.leads.insert_one(lead.model_dump())
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads():
    docs = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


# Chat (non-streaming for simplicity in JSON UI)
@api_router.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="EMERGENT_LLM_KEY no configurado")

    session_id = req.session_id or str(uuid.uuid4())

    chat_client = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=session_id,
        system_message=SYSTEM_PROMPT,
    ).with_model("anthropic", "claude-sonnet-4-5-20250929")

    # Persist user message
    await db.chat_messages.insert_one({
        "id": str(uuid.uuid4()),
        "session_id": session_id,
        "role": "user",
        "content": req.message,
        "created_at": datetime.now(timezone.utc).isoformat(),
    })

    # Stream and accumulate
    reply_text = ""
    try:
        async for event in chat_client.stream_message(UserMessage(text=req.message)):
            if isinstance(event, TextDelta):
                reply_text += event.content
            elif isinstance(event, StreamDone):
                break
    except Exception as e:
        logger.exception("Chat error")
        raise HTTPException(status_code=500, detail=f"Error del asistente: {str(e)}")

    if not reply_text:
        reply_text = "Lo siento, no pude generar una respuesta. Por favor intenta de nuevo."

    # Persist assistant message
    await db.chat_messages.insert_one({
        "id": str(uuid.uuid4()),
        "session_id": session_id,
        "role": "assistant",
        "content": reply_text,
        "created_at": datetime.now(timezone.utc).isoformat(),
    })

    return ChatResponse(reply=reply_text, session_id=session_id)


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
