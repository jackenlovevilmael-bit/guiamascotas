import { Bandage, ThermometerSun, Syringe, HandHeart, Info } from "lucide-react";

const items = [
  {
    icon: Bandage,
    title: "Vendas elásticas y gasas",
    hint: "Para heridas y compresión",
  },
  {
    icon: ThermometerSun,
    title: "Termómetro rectal",
    hint: "Normal: 38–39.2°C",
  },
  {
    icon: Syringe,
    title: "Jeringas de 5ml y 10ml",
    hint: "Para dar líquidos o medicinas",
  },
  {
    icon: HandHeart,
    title: "Guantes desechables y pinzas",
    hint: "Para manipular con seguridad",
  },
];

export default function FirstAidKit() {
  return (
    <section
      id="kit"
      data-testid="first-aid-kit-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 pb-16"
    >
      <div className="bg-white border border-zinc-200 rounded-3xl p-7 sm:p-10">
        <div className="flex items-end justify-between mb-7 gap-4 flex-wrap">
          <div>
            <h2 className="heading-font text-2xl sm:text-3xl font-semibold tracking-tight">
              Kit de Primeros Auxilios recomendado
            </h2>
            <p className="text-sm text-zinc-500 mt-1.5">
              Ten esto siempre a mano en casa
            </p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
            Imprescindible
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => {
            const I = it.icon;
            return (
              <div
                key={it.title}
                data-testid={`kit-item-${it.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex gap-4 p-5 rounded-2xl bg-zinc-50/60 hover:bg-emerald-50/50 border border-transparent hover:border-emerald-100 transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <I className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">{it.title}</div>
                  <div className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    {it.hint}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-xs text-zinc-500 flex items-start gap-2">
          <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
          <span>
            Puedes comprar un kit completo en tiendas especializadas o
            farmacias veterinarias. Revisa la fecha de vencimiento dos veces
            al año.
          </span>
        </div>
      </div>
    </section>
  );
}
