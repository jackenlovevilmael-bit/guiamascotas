import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { pets, CATEGORIES, getCategoryCounts } from "@/data/pets";
import PetDialog from "@/components/PetDialog";

export default function PetsCatalog() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [visibleCount, setVisibleCount] = useState(20);

  const counts = useMemo(() => getCategoryCounts(), []);

  const filtered = useMemo(() => {
    return pets.filter((p) => {
      const matchCat = filter === "all" || p.category === filter;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.summary.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, filter]);

  const visible = filtered.slice(0, visibleCount);

  const askBot = (pet) => {
    // Open the chatbot widget by dispatching event + scrolling
    window.dispatchEvent(
      new CustomEvent("open-vetbot", {
        detail: { prompt: `Cuéntame todo sobre el ${pet.name} (${pet.category}): cuidados, alimentación, problemas de salud comunes y consejos para dueños primerizos.` },
      })
    );
  };

  return (
    <section
      id="mascotas"
      data-testid="pets-catalog-section"
      className="max-w-7xl mx-auto px-5 sm:px-8 pb-16"
    >
      <div className="flex items-end justify-between mb-6 px-1 gap-4 flex-wrap">
        <div>
          <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-3">
            Catálogo
          </span>
          <h2 className="heading-font text-3xl sm:text-4xl font-semibold tracking-tight">
            Las mascotas más comunes del mundo
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base mt-2 max-w-xl">
            Más de <strong className="text-emerald-700">{pets.length}</strong> razas y especies con
            cuidados básicos, esperanza de vida y problemas de salud frecuentes.
            Haz clic en cualquier tarjeta para ver el detalle.
          </p>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-3xl p-2 sm:p-3 shadow-sm shadow-zinc-100">
        <div className="flex flex-col md:flex-row gap-3 items-center px-3 pt-3 pb-2">
          <div className="flex-1 relative w-full">
            <Search className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              data-testid="pet-search-input"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setVisibleCount(20);
              }}
              type="text"
              placeholder="Busca una mascota: labrador, persa, periquito, betta..."
              className="w-full pl-12 pr-5 py-3.5 bg-zinc-50 border border-zinc-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none rounded-full text-base placeholder:text-zinc-400 transition-all"
            />
          </div>
        </div>
        <div className="px-3 pb-3 flex gap-2 flex-wrap">
          {CATEGORIES.map((c) => {
            const active = filter === c.key;
            return (
              <button
                key={c.key}
                onClick={() => {
                  setFilter(c.key);
                  setVisibleCount(20);
                }}
                data-testid={`pet-filter-${c.key}`}
                className={`px-4 py-2 text-sm font-semibold rounded-full inline-flex items-center gap-2 transition-colors ${
                  active
                    ? "bg-emerald-600 text-white"
                    : "border border-zinc-300 hover:bg-zinc-50 text-zinc-700 bg-white"
                }`}
              >
                <span className="text-base">{c.emoji}</span>
                <span>{c.label}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    active ? "bg-white/20" : "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {counts[c.key]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {visible.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            data-testid={`pet-card-${p.id}`}
            className="text-left bg-white border border-zinc-200 rounded-3xl p-5 hover:border-emerald-300 hover:shadow-lg hover:shadow-zinc-200/60 hover:-translate-y-1 transition-all duration-300 group animate-fade-up"
            style={{ animationDelay: `${(idx % 12) * 30}ms` }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl group-hover:bg-emerald-100 transition-colors">
                {p.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-zinc-500 mb-0.5">
                  {p.category}
                </span>
                <h3 className="heading-font font-semibold text-base tracking-tight leading-tight truncate group-hover:text-emerald-700 transition-colors">
                  {p.name}
                </h3>
              </div>
            </div>
            <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed mb-3">
              {p.summary}
            </p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-500">{p.lifespan}</span>
              <span className="text-emerald-600 group-hover:text-emerald-700 font-semibold inline-flex items-center gap-1 transition-all group-hover:gap-1.5">
                Ver detalle
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-zinc-500">
          No encontramos mascotas para tu búsqueda.
        </div>
      )}

      {visible.length < filtered.length && (
        <div className="mt-8 flex justify-center">
          <button
            data-testid="pet-load-more"
            onClick={() => setVisibleCount((n) => n + 20)}
            className="px-7 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-full transition-colors"
          >
            Ver más mascotas ({filtered.length - visible.length} restantes)
          </button>
        </div>
      )}

      <PetDialog
        pet={selected}
        onClose={() => setSelected(null)}
        onAskBot={askBot}
      />
    </section>
  );
}
