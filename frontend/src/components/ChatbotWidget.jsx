import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const STORAGE_KEY = "guia_mascotas_chat_session";

const INITIAL_MESSAGES = [
  {
    role: "assistant",
    content:
      "¡Hola! Soy VetBot 🐾, el asistente de GuiaMascotas. Cuéntame qué le pasa a tu mascota o pregúntame sobre cuidados. Recuerda: no sustituyo a un veterinario.",
  },
];

const SUGGESTIONS = [
  "Mi perro vomitó dos veces hoy",
  "Mi gato no quiere comer",
  "Cómo desparasitar un cachorro",
  "Alimentos prohibidos para perros",
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(() =>
    localStorage.getItem(STORAGE_KEY) || ""
  );
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = async (text) => {
    const msg = (text ?? input).trim();
    if (!msg || loading) return;

    setMessages((m) => [...m, { role: "user", content: msg }]);
    setInput("");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/chat`, {
        message: msg,
        session_id: sessionId || undefined,
      });
      if (data?.session_id && data.session_id !== sessionId) {
        setSessionId(data.session_id);
        localStorage.setItem(STORAGE_KEY, data.session_id);
      }
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "Tuve un problema para responder. Por favor intenta de nuevo en un momento.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating launcher */}
      <div id="chat" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {!open && (
          <button
            data-testid="chatbot-launcher"
            onClick={() => setOpen(true)}
            className="relative inline-flex items-center gap-2.5 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-xl shadow-emerald-600/30 transition-all hover:-translate-y-0.5 animate-pulse-soft"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Pregunta a VetBot</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full border-2 border-white" />
          </button>
        )}

        {open && (
          <div
            data-testid="chatbot-panel"
            className="w-[92vw] max-w-sm sm:w-96 bg-white rounded-3xl shadow-2xl shadow-zinc-300/40 border border-zinc-200 overflow-hidden flex flex-col"
            style={{ height: "min(72vh, 600px)" }}
          >
            <div className="bg-zinc-950 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm flex items-center gap-1.5">
                    VetBot
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Powered by Claude · GuiaMascotas
                  </div>
                </div>
              </div>
              <button
                data-testid="chatbot-close"
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto chat-scroll p-4 space-y-3 bg-zinc-50"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  data-testid={`chat-message-${m.role}-${i}`}
                  className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      m.role === "user"
                        ? "bg-zinc-900 text-white"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {m.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={`max-w-[80%] text-sm rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-emerald-600 text-white rounded-tr-sm"
                        : "bg-white border border-zinc-200 text-zinc-800 rounded-tl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  VetBot está pensando...
                </div>
              )}
              {messages.length === 1 && !loading && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      data-testid={`chat-suggestion-${s.slice(0, 12).replace(/\s+/g, "-").toLowerCase()}`}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-zinc-200 bg-white hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="p-3 border-t border-zinc-200 bg-white flex items-center gap-2"
            >
              <input
                data-testid="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                disabled={loading}
                className="flex-1 px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 outline-none rounded-full text-sm placeholder:text-zinc-400 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                data-testid="chatbot-send"
                className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-zinc-300 text-white flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
