import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Stethoscope,
  Sparkles,
  Loader2,
  AlertTriangle,
  Send,
  Trash2,
} from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const PET_TYPES = [
  { v: "perro", l: "Perro 🐶" },
  { v: "gato", l: "Gato 🐱" },
  { v: "ave", l: "Ave 🦜" },
  { v: "conejo", l: "Conejo 🐰" },
  { v: "roedor", l: "Roedor 🐹" },
  { v: "reptil", l: "Reptil 🦎" },
  { v: "pez", l: "Pez 🐠" },
  { v: "anfibio", l: "Anfibio 🐸" },
  { v: "huron", l: "Hurón" },
  { v: "erizo", l: "Erizo 🦔" },
  { v: "cerdo", l: "Mini Pig 🐷" },
  { v: "otro", l: "Otra" },
];

const SIZES = ["Muy pequeño", "Pequeño", "Mediano", "Grande", "Gigante"];

const DURATIONS = [
  "Hace menos de 1 hora",
  "Hace algunas horas",
  "Hace 1 día",
  "Hace 2-3 días",
  "Hace una semana o más",
];

export default function DiagnosticForm() {
  const [form, setForm] = useState({
    pet_type: "perro",
    species: "",
    age: "",
    size: "Mediano",
    weight: "",
    symptoms: "",
    duration: "Hace algunas horas",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  const buildPrompt = () => {
    const lines = [
      "Por favor realiza una EVALUACIÓN VETERINARIA orientativa con los siguientes datos:",
      `• Tipo de mascota: ${form.pet_type}`,
    ];
    if (form.species) lines.push(`• Raza/especie: ${form.species}`);
    if (form.age) lines.push(`• Edad: ${form.age}`);
    if (form.size) lines.push(`• Tamaño: ${form.size}`);
    if (form.weight) lines.push(`• Peso aproximado: ${form.weight}`);
    if (form.duration) lines.push(`• Duración de los síntomas: ${form.duration}`);
    lines.push("", "Síntomas y observaciones del dueño:");
    lines.push(form.symptoms.trim());
    lines.push("");
    lines.push(
      "Responde SIEMPRE con: 1) Posibles causas (3-5 ordenadas por probabilidad), " +
        "2) Señales de alarma que exigen ir al veterinario YA, " +
        "3) Qué hacer en casa (pasos numerados), " +
        "4) Cuándo consultar al veterinario (plazos concretos). " +
        "Recuerda que no sustituyes a un veterinario."
    );
    return lines.join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.symptoms.trim() || form.symptoms.trim().length < 5) {
      toast.error("Describe los síntomas con al menos unas palabras.");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      const { data } = await axios.post(`${API}/chat`, {
        message: buildPrompt(),
      });
      setResult(data.reply);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } catch (err) {
      const detail = err?.response?.data?.detail || "Inténtalo más tarde";
      toast.error(`No pudimos generar el diagnóstico: ${detail}`);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setForm({
      ...form,
      species: "",
      age: "",
      weight: "",
      symptoms: "",
    });
  };

  return (
    <section
      id="diagnostico"
      data-testid="diagnostic-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 pb-16"
    >
      <div className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950 noise-overlay text-white rounded-[2rem] p-7 sm:p-12 overflow-hidden">
        <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

        <div className="relative grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Diagnóstico con IA
            </div>
            <h2 className="heading-font mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
              Dinos qué le pasa <br className="hidden sm:block" />
              <span className="text-emerald-400">y la IA te orienta</span>
            </h2>
            <p className="mt-4 text-zinc-300 text-base sm:text-lg max-w-md leading-relaxed">
              Completa los datos de tu mascota y sus síntomas. VetBot analizará la
              información y te dará posibles causas, señales de alarma y qué hacer.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Funciona con cualquier mascota
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Respuesta estructurada en segundos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Gratis, sin registro
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 bg-white text-zinc-900 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-900/40"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Tipo de mascota
                </label>
                <select
                  data-testid="diag-pet-type"
                  value={form.pet_type}
                  onChange={(e) => setForm({ ...form, pet_type: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base transition-all"
                >
                  {PET_TYPES.map((t) => (
                    <option key={t.v} value={t.v}>
                      {t.l}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Raza o especie (opcional)
                </label>
                <input
                  data-testid="diag-species"
                  value={form.species}
                  onChange={(e) => setForm({ ...form, species: e.target.value })}
                  placeholder="Ej. Labrador, Persa, Periquito..."
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base placeholder:text-zinc-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Edad
                </label>
                <input
                  data-testid="diag-age"
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  placeholder="Ej. 3 años, 6 meses, cachorro"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base placeholder:text-zinc-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Tamaño
                </label>
                <select
                  data-testid="diag-size"
                  value={form.size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base transition-all"
                >
                  {SIZES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Peso aproximado (opcional)
                </label>
                <input
                  data-testid="diag-weight"
                  value={form.weight}
                  onChange={(e) => setForm({ ...form, weight: e.target.value })}
                  placeholder="Ej. 8 kg, 200 g"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base placeholder:text-zinc-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                  Desde cuándo
                </label>
                <select
                  data-testid="diag-duration"
                  value={form.duration}
                  onChange={(e) => setForm({ ...form, duration: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base transition-all"
                >
                  {DURATIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 mb-1.5">
                Describe los síntomas y comportamiento
              </label>
              <textarea
                data-testid="diag-symptoms"
                value={form.symptoms}
                onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
                rows={4}
                placeholder="Ej. Mi perro lleva 2 días sin querer comer, vomitó tres veces y está más quieto de lo normal..."
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-2xl text-base placeholder:text-zinc-400 transition-all resize-none"
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3 items-center">
              <button
                type="submit"
                disabled={loading}
                data-testid="diag-submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-zinc-300 text-white font-semibold rounded-full shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analizando...
                  </>
                ) : (
                  <>
                    <Stethoscope className="w-4 h-4" />
                    Obtener diagnóstico orientativo
                  </>
                )}
              </button>
              {result && (
                <button
                  type="button"
                  onClick={reset}
                  data-testid="diag-reset"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-300 text-zinc-700 hover:bg-zinc-50 font-semibold rounded-full text-sm transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Nuevo diagnóstico
                </button>
              )}
            </div>

            <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
              <AlertTriangle className="inline w-3 h-3 text-rose-500 mr-1" />
              La IA da orientación educativa. Para urgencias o casos graves,
              acude SIEMPRE a un veterinario.
            </p>
          </form>
        </div>

        {result && (
          <div
            ref={resultRef}
            data-testid="diag-result"
            className="relative mt-8 bg-white text-zinc-900 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-900/30 animate-fade-up"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Diagnóstico orientativo de VetBot
                </div>
                <div className="text-sm text-zinc-500">
                  Generado por IA · No sustituye al veterinario
                </div>
              </div>
            </div>
            <div className="prose prose-zinc max-w-none whitespace-pre-wrap text-sm sm:text-base leading-relaxed">
              {result}
            </div>

            <div className="mt-6 bg-rose-50 border border-rose-200 rounded-2xl p-4 flex gap-3 items-start text-sm">
              <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <p className="text-rose-900 leading-relaxed">
                Si tu mascota presenta dificultad respiratoria, convulsiones,
                hemorragias o pérdida de conciencia, contacta inmediatamente a
                un veterinario de urgencias.
              </p>
            </div>

            <button
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("open-vetbot", {
                    detail: {
                      prompt:
                        "Quiero seguir conversando sobre el caso anterior. Necesito más detalles y consejos prácticos.",
                    },
                  })
                );
              }}
              data-testid="diag-followup"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-full text-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Continuar la conversación con VetBot
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
