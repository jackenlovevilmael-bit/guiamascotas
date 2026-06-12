import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-10">
      <div
        data-testid="disclaimer-banner"
        className="bg-rose-50 border border-rose-200 rounded-3xl p-5 sm:p-6 flex gap-4 items-start"
      >
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-11 h-11 rounded-2xl bg-rose-100 flex items-center justify-center">
            <AlertTriangle className="text-rose-600 w-6 h-6" />
          </div>
        </div>
        <div className="text-sm leading-relaxed text-rose-900">
          <strong className="text-rose-700 font-semibold">
            IMPORTANTE — AVISO LEGAL:
          </strong>{" "}
          Esta herramienta es solo informativa y educativa.{" "}
          <span className="font-medium">
            NO sustituye la atención veterinaria profesional.
          </span>{" "}
          En caso de emergencia, contacta inmediatamente a tu veterinario o
          clínica de urgencias 24 horas. Los síntomas pueden indicar problemas
          graves. Nunca automediques a tu mascota.
        </div>
      </div>
    </section>
  );
}
