import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SEVERITY } from "@/data/symptoms";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export default function SymptomDialog({ symptom, onClose }) {
  if (!symptom) return null;
  const Icon = symptom.icon;
  const sev = SEVERITY[symptom.severity];

  return (
    <Dialog open={!!symptom} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        data-testid="symptom-dialog"
        className="max-w-2xl rounded-3xl border-zinc-200 max-h-[85vh] overflow-y-auto"
      >
        <DialogHeader>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-emerald-600" />
            </div>
            <div className="flex-1">
              <span
                className={`inline-block text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${sev.className} mb-2`}
              >
                {sev.label}
              </span>
              <DialogTitle className="heading-font text-2xl sm:text-3xl font-semibold tracking-tight text-left">
                {symptom.title}
              </DialogTitle>
              <DialogDescription className="text-zinc-600 mt-1.5 text-left text-base leading-relaxed">
                {symptom.short}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-3">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-3">
            ¿Qué hacer? Paso a paso
          </div>
          <ol className="space-y-3">
            {symptom.steps.map((step, i) => (
              <li
                key={i}
                data-testid={`symptom-step-${i}`}
                className="flex gap-3 items-start"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed pt-0.5">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 bg-rose-50 border border-rose-200 rounded-2xl p-4 flex gap-3 items-start">
          <AlertTriangle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-rose-900 leading-relaxed">
            <strong className="text-rose-700">Atención: </strong>
            {symptom.warning}
          </p>
        </div>

        <div className="mt-2 text-xs text-zinc-500 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          Información educativa — no sustituye a un veterinario.
        </div>
      </DialogContent>
    </Dialog>
  );
}
