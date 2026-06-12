import { Search, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-10 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GUÍA ACTUALIZADA 2026</span>
            </div>

            <h1
              data-testid="hero-title"
              className="heading-font mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-900 leading-[1.05]"
            >
              ¿Qué hacer si <br className="hidden sm:block" />
              le pasa algo a <span className="text-emerald-600">tu mascota?</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg sm:text-xl text-zinc-600 leading-relaxed">
              Guía rápida y práctica de primeros auxilios para perros y gatos.
              Encuentra qué hacer en emergencias comunes y consulta a nuestro
              asistente con IA gratis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#sintomas"
                data-testid="hero-cta-buscar"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
              >
                <Search className="w-4 h-4" />
                Buscar síntoma ahora
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
                <div className="w-8 h-8 bg-white border-2 border-white shadow rounded-full flex items-center justify-center text-base">🐶</div>
                <div className="w-8 h-8 bg-white border-2 border-white shadow rounded-full flex items-center justify-center text-base">🐱</div>
                <div className="w-8 h-8 bg-emerald-100 border-2 border-white shadow rounded-full flex items-center justify-center text-xs font-bold text-emerald-700">+</div>
              </div>
              <span>
                Usado por más de{" "}
                <strong className="text-emerald-700">48.000</strong> dueños de mascotas
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="relative bg-white shadow-xl shadow-zinc-300/30 border border-zinc-100 rounded-[2.5rem] p-2">
              <img
                src="https://images.pexels.com/photos/16395150/pexels-photo-16395150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Un perro y un gato juntos - GuiaMascotas"
                className="rounded-[2rem] w-full aspect-[4/3] object-cover"
                loading="eager"
              />
              <div className="absolute -bottom-4 -right-3 bg-white shadow-lg shadow-zinc-200/60 px-4 py-2.5 rounded-2xl border border-zinc-100 flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">Revisado por veterinarios</span>
              </div>
              <div className="absolute -top-4 -left-3 bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 px-4 py-2 rounded-2xl text-xs font-semibold tracking-wider uppercase">
                Gratis para siempre
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
