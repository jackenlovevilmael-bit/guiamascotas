import { HeartPulse, Zap, Skull, Phone } from "lucide-react";

const items = [
  {
    icon: HeartPulse,
    title: "Dificultad respiratoria",
    hint: "Llamar inmediatamente",
  },
  {
    icon: Zap,
    title: "Convulsiones",
    hint: "No tocar la boca · Llamar veterinario",
  },
  {
    icon: Skull,
    title: "Sospecha de envenenamiento",
    hint: "No inducir vómito · Contactar urgencias",
  },
];

export default function EmergencySection() {
  return (
    <section
      id="emergencia"
      data-testid="emergency-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 pb-16"
    >
      <div className="relative bg-zinc-950 noise-overlay text-white rounded-[2rem] p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="relative flex flex-col md:flex-row gap-y-8 md:items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-[10px] font-bold text-emerald-400 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Acción inmediata
            </div>
            <h2 className="heading-font text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
              ¿Es una emergencia?
            </h2>
            <p className="text-zinc-300 mt-3 max-w-md text-base sm:text-lg leading-relaxed">
              Si tu mascota presenta cualquiera de estos signos, actúa YA.
              Cada minuto importa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm flex-shrink-0 md:max-w-xl">
            {items.map((it) => {
              const I = it.icon;
              return (
                <div
                  key={it.title}
                  data-testid={`emergency-item-${it.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 transition-colors p-4 rounded-2xl"
                >
                  <div className="font-semibold flex items-center gap-2">
                    <I className="w-4 h-4 text-rose-400" />
                    {it.title}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{it.hint}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-9 pt-6 border-t border-white/15 flex flex-wrap gap-3 items-center text-sm">
          <div className="font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            Números útiles (Chile y LATAM):
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full">
              Clínicas veterinarias 24h · Busca localmente
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-full">
              Centro de Toxicología · Consulta tu país
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
