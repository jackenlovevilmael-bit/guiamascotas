import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Send, PawPrint, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function LeadForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    pet_type: "perro",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Por favor completa tu nombre y email.");
      return;
    }
    try {
      setSubmitting(true);
      await axios.post(`${API}/leads`, form);
      navigate("/gracias");
    } catch (err) {
      const detail = err?.response?.data?.detail || "Inténtalo más tarde";
      toast.error(`No pudimos registrarte: ${detail}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="lead"
      data-testid="lead-form-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 pb-20"
    >
      <div className="relative bg-emerald-50 border border-emerald-100 rounded-[2rem] p-7 sm:p-12 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-emerald-700 text-xs font-bold tracking-wider uppercase border border-emerald-200">
              <PawPrint className="w-3.5 h-3.5" />
              Boletín gratuito
            </div>
            <h2 className="heading-font mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
              Recibe la <span className="text-emerald-600">Guía PDF</span> de
              primeros auxilios
            </h2>
            <p className="mt-3 text-zinc-700 text-base sm:text-lg leading-relaxed max-w-md">
              Imprímela y déjala en tu nevera. Te enviaremos también consejos
              mensuales para el cuidado de tu mascota. Sin spam, prometido.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> 12 fichas de emergencia listas para imprimir
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Checklist de kit casero
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> Tips veterinarios cada mes
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-200/30 border border-emerald-100"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Tu nombre
                </label>
                <input
                  data-testid="lead-input-name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ej. María"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base placeholder:text-zinc-400 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                  <input
                    data-testid="lead-input-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="tu@email.com"
                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base placeholder:text-zinc-400 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  ¿Tienes perro o gato?
                </label>
                <div className="flex gap-2">
                  {[
                    { v: "perro", l: "🐶 Perro" },
                    { v: "gato", l: "🐱 Gato" },
                    { v: "ambos", l: "Ambos" },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.v}
                      data-testid={`lead-pet-${opt.v}`}
                      onClick={() => setForm({ ...form, pet_type: opt.v })}
                      className={`flex-1 px-3 py-2.5 rounded-full text-sm font-medium border transition-all ${
                        form.pet_type === opt.v
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300"
                      }`}
                    >
                      {opt.l}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="lead-submit-button"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-zinc-300 text-white font-semibold rounded-full shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Recibir la guía gratis
                  </>
                )}
              </button>
              <p className="text-xs text-zinc-500 text-center leading-relaxed">
                Al suscribirte aceptas nuestra{" "}
                <a href="/privacidad" className="text-emerald-700 underline">
                  Política de Privacidad
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
