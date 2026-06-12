import { Search, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

const ANIMALS = [
  { emoji: "🐶", label: "Perro", color: "bg-amber-100" },
  { emoji: "🐱", label: "Gato", color: "bg-rose-100" },
  { emoji: "🐰", label: "Conejo", color: "bg-pink-100" },
  { emoji: "🦜", label: "Loro", color: "bg-lime-100" },
  { emoji: "🐹", label: "Hámster", color: "bg-orange-100" },
  { emoji: "🐦", label: "Pájaro", color: "bg-sky-100" },
  { emoji: "🐢", label: "Tortuga", color: "bg-green-100" },
  { emoji: "🐠", label: "Pez", color: "bg-cyan-100" },
  { emoji: "🦎", label: "Reptil", color: "bg-teal-100" },
  { emoji: "🐭", label: "Ratón", color: "bg-zinc-100" },
  { emoji: "🦔", label: "Erizo", color: "bg-yellow-100" },
  { emoji: "🐷", label: "Mini Pig", color: "bg-pink-100" },
];

export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-10 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GUÍA ACTUALIZADA 2026 — TODAS LAS MASCOTAS</span>
            </div>

            <h1
              data-testid="hero-title"
              className="heading-font mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-900 leading-[1.05]"
            >
              ¿Qué hacer si <br className="hidden sm:block" />
              le pasa algo a <span className="text-emerald-600">tu mascota?</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg sm:text-xl text-zinc-600 leading-relaxed">
              Guía rápida y práctica de primeros auxilios para perros, gatos, aves,
              conejos, roedores, peces, reptiles y más. Diagnóstico inteligente con
              IA y un asistente experto, todo gratis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#diagnostico"
                data-testid="hero-cta-diagnostico"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
              >
                <Search className="w-4 h-4" />
                Diagnóstico con IA
              </a>
              <a
                href="#emergencia"
                data-testid="hero-cta-emergencia"
                className="inline-flex items-center gap-2.5 px-6 py-4 border-2 border-zinc-300 hover:border-zinc-400 font-semibold rounded-full text-zinc-800 transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Emergencias
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-zinc-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-amber-100 border-2 border-white shadow rounded-full flex items-center justify-center text-base">🐶</div>
                <div className="w-8 h-8 bg-rose-100 border-2 border-white shadow rounded-full flex items-center justify-center text-base">🐱</div>
                <div className="w-8 h-8 bg-lime-100 border-2 border-white shadow rounded-full flex items-center justify-center text-base">🦜</div>
                <div className="w-8 h-8 bg-emerald-100 border-2 border-white shadow rounded-full flex items-center justify-center text-xs font-bold text-emerald-700">+</div>
              </div>
              <span>
                Usado por más de{" "}
                <strong className="text-emerald-700">48.000</strong> dueños de mascotas
              </span>
            </div>
          </div>

          <div
            className="lg:col-span-5 relative animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <div className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 border border-emerald-100 rounded-[2.5rem] p-6 sm:p-8 shadow-xl shadow-emerald-200/40">
              <div className="grid grid-cols-4 gap-3">
                {ANIMALS.map((a, i) => (
                  <div
                    key={a.label}
                    className={`${a.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-0.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:rotate-[-2deg]`}
                    style={{
                      animationDelay: `${i * 60}ms`,
                      animation: "fade-up 0.6s ease-out both",
                    }}
                    data-testid={`hero-animal-${a.label.toLowerCase()}`}
                  >
                    <span className="text-3xl sm:text-4xl">{a.emoji}</span>
                    <span className="text-[10px] font-semibold text-zinc-700">
                      {a.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-4 -right-3 bg-white shadow-lg shadow-zinc-200/60 px-4 py-2.5 rounded-2xl border border-zinc-100 flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Revisado por veterinarios</span>
              </div>
              <div className="absolute -top-4 -left-3 bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase">
                100+ mascotas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
