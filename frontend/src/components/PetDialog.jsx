import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Heart, Clock, Ruler, AlertTriangle, MessageCircle, Sparkles } from "lucide-react";

export default function PetDialog({ pet, onClose, onAskBot }) {
  if (!pet) return null;

  return (
    <Dialog open={!!pet} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        data-testid="pet-dialog"
        className="max-w-2xl rounded-3xl border-zinc-200 max-h-[88vh] overflow-y-auto"
      >
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-4xl flex-shrink-0">
              {pet.emoji}
            </div>
            <div className="flex-1">
              <span className="inline-block text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 mb-2">
                {pet.category}
              </span>
              <DialogTitle className="heading-font text-2xl sm:text-3xl font-semibold tracking-tight text-left">
                {pet.name}
              </DialogTitle>
              <DialogDescription className="text-zinc-600 mt-1.5 text-left text-base leading-relaxed">
                {pet.summary}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-zinc-50 rounded-2xl p-3">
            <div className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 flex items-center gap-1.5">
              <Clock className="w-3 h-3" /> Esperanza de vida
            </div>
            <div className="font-semibold text-sm mt-1 text-zinc-900">{pet.lifespan}</div>
          </div>
          <div className="bg-zinc-50 rounded-2xl p-3">
            <div className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 flex items-center gap-1.5">
              <Ruler className="w-3 h-3" /> Tamaño
            </div>
            <div className="font-semibold text-sm mt-1 text-zinc-900">{pet.size}</div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 col-span-2 sm:col-span-1">
            <div className="text-[10px] uppercase tracking-wider font-bold text-emerald-700 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Categoría
            </div>
            <div className="font-semibold text-sm mt-1 text-emerald-800 capitalize">
              {pet.category}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-2 flex items-center gap-2">
            <Heart className="w-3.5 h-3.5" /> Cuidados básicos
          </div>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            {pet.care}
          </p>
        </div>

        <div className="mt-5">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-rose-700 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5" /> Problemas de salud más frecuentes
          </div>
          <ul className="space-y-1.5">
            {pet.common_issues.map((issue, i) => (
              <li
                key={i}
                data-testid={`pet-issue-${i}`}
                className="flex gap-2 items-start text-sm text-zinc-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                {issue}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => {
            onAskBot?.(pet);
            onClose();
          }}
          data-testid="pet-ask-bot"
          className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-600/25 transition-all"
        >
          <MessageCircle className="w-4 h-4" />
          Pregúntale a VetBot sobre el {pet.name}
        </button>

        <p className="mt-3 text-xs text-zinc-500 text-center">
          Información orientativa. Consulta siempre a un veterinario para casos específicos.
        </p>
      </DialogContent>
    </Dialog>
  );
}
