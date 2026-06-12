# PRD — GuiaMascotas

## Original problem statement
"mascotas un wed y que después puedes poder a github ya para publicarlo es lo necesito para google ads"

Usuario quiere un sitio web informativo sobre mascotas (primeros auxilios), listo para publicarse en GitHub y usarse en campañas de Google Ads. Subió un HTML de referencia: "Primeros Auxilios para tu Mascota - GuiaMascotas".

## User choices
- Guía informativa de primeros auxilios para mascotas
- Reutilizar contenido del HTML subido
- Chatbot IA (Claude Sonnet 4.5 vía EMERGENT_LLM_KEY)
- Política de privacidad + Términos + Página de gracias post-conversión + Formulario de leads
- Diseño moderno, colorido y amigable (esmeralda/verde sobre blanco/zinc)

## User personas
- Dueño de perro o gato preocupado buscando información rápida durante una emergencia.
- Suscriptor potencial al boletín que descarga la guía PDF.
- Visitante de un anuncio de Google Ads que aterriza buscando primeros auxilios.

## Architecture
- Backend: FastAPI + MongoDB (Motor). Endpoints `/api/health`, `/api/leads` (POST/GET), `/api/chat` (POST con Claude Sonnet 4.5 vía `emergentintegrations`).
- Frontend: React (CRA + Craco), React Router (`/`, `/gracias`, `/privacidad`, `/terminos`), Tailwind + shadcn/ui (Dialog, Sonner toast).
- Tipografía: Outfit (titulares) + Work Sans (cuerpo).
- Idioma: español. Marca: GuiaMascotas, color esmeralda #10b981.

## What's been implemented (2026-06-12)
- Backend: leads CRUD, health check, chatbot Claude Sonnet 4.5 con persistencia de mensajes y session_id.
- Frontend: Home (Hero, Disclaimer, 12 tarjetas de síntomas, búsqueda + filtros, modal con pasos, sección de emergencia, kit de primeros auxilios, formulario de leads, footer).
- Páginas legales: `/privacidad`, `/terminos`.
- Página post-conversión: `/gracias` con disparo de evento `gtag('event','conversion')` si está disponible.
- Chatbot flotante VetBot integrado en bottom-right con sugerencias rápidas.
- Validación cliente y servidor de leads (email regex + EmailStr).

## Backlog
- **P0** (none — MVP completo).
- **P1**
  - Integrar Google Ads (gtag.js / Google Tag Manager) con conversion ID real cuando el usuario lo entregue.
  - Añadir más artículos de cuidados (alimentación, vacunas, adiestramiento) como nuevas rutas.
  - Configurar envío real del PDF al email (Resend / SendGrid) tras lead.
- **P2**
  - Modo oscuro opcional.
  - i18n preparado para EN/PT.
  - SEO avanzado: sitemap.xml, robots.txt, JSON-LD `MedicalWebPage` por síntoma.
  - Marketing automation (secuencia de emails) y página de "Recursos" descargables.
