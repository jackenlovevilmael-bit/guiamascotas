import { useMemo, useState } from "react";
import { Search, ArrowRight, Dog, Cat } from "lucide-react";
import { symptoms, SEVERITY } from "@/data/symptoms";
import SymptomDialog from "@/components/SymptomDialog";

const filters = [
  { key: "all", label: "Todos", icon: null },
  { key: "perro", label: "Perros", icon: Dog },
  { key: "gato", label: "Gatos", icon: Cat },
];

export default function SymptomsSection() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return symptoms.filter((s) => {
      const matchPet = filter === "all" || s.pets.includes(filter);
      const matchQ =
        !q ||
        s.title.toLowerCase().includes(q.toLowerCase()) ||
        s.short.toLowerCase().includes(q.toLowerCase());
      return matchPet && matchQ;
    });
  }, [q, filter]);

  return (
    <section
      id="sintomas"
      data-testid="symptoms-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 pb-10"
    >
      <div className="bg-white border border-zinc-200 rounded-3xl p-2 sm:p-3 shadow-sm shadow-zinc-100">
        <div className="flex flex-col md:flex-row gap-3 items-center px-3 pt-3 pb-2">
          <div className="flex-1 relative w-full">
            <Search className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              data-testid="symptom-search-input"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="text"
              placeholder="Busca un síntoma: vómitos, diarrea, letargo, convulsiones..."
              className="w-full pl-12 pr-5 py-3.5 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-full text-base placeholder:text-zinc-400 transition-all"
            />
          </div>

          <div className="flex gap-2 flex-wrap md:flex-nowrap w-full md:w-auto">
            {filters.map((f) => {
              const Icon = f.icon;
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  data-testid={`symptom-filter-${f.key}`}
                  className={`px-5 py-3 text-sm font-semibold rounded-full flex items-center gap-2 transition-colors ${
                    active
                      ? "bg-emerald-600 text-white"
                      : "border border-zinc-300 hover:bg-zinc-50 text-zinc-700"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between mt-8 mb-5 px-1">
        <div>
          <h2 className="heading-font text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            Síntomas y emergencias comunes
          </h2>
          <p className="text-zinc-500 text-sm mt-1.5">
            Haz clic en cualquier tarjeta para ver la guía paso a paso
          </p>
        </div>
        <div
          data-testid="symptoms-count"
          className="hidden md:inline-block text-xs px-4 py-1.5 bg-white border border-zinc-200 rounded-full text-zinc-600 font-medium"
        >
          {filtered.length} guías disponibles
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((s, idx) => {
          const Icon = s.icon;
          const sev = SEVERITY[s.severity];
          return (
            <button
              key={s.id}
              onClick={() => setSelected(s)}
              data-testid={`symptom-card-${s.id}`}
              className="text-left bg-white border border-zinc-200 rounded-3xl p-5 hover:border-emerald-300 hover:shadow-lg hover:shadow-zinc-200/60 hover:-translate-y-1 transition-all duration-300 group animate-fade-up"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="flex justify-between items-start mb-4 gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${sev.className} leading-tight text-right`}
                >
                  {sev.label}
                </span>
              </div>

              <h3 className="heading-font font-semibold text-lg tracking-tight mb-1 group-hover:text-emerald-700 transition-colors">
                {s.title}
              </h3>
              <div className="flex items-center gap-1 mb-3 text-base">
                {s.pets.includes("perro") && <span>🐶</span>}
                {s.pets.includes("gato") && <span>🐱</span>}
              </div>
              <p className="text-sm text-zinc-600 line-clamp-3 mb-4 leading-relaxed">
                {s.short}
              </p>
              <span className="text-emerald-600 group-hover:text-emerald-700 font-semibold text-sm inline-flex items-center gap-1.5 transition-all group-hover:gap-2">
                Ver guía completa
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-zinc-500">
            No encontramos resultados para tu búsqueda.
          </div>
        )}
      </div>

      <SymptomDialog symptom={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
