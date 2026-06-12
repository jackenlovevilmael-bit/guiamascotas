import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    document.title = "¡Gracias! | GuiaMascotas";
    // Trigger Google Ads conversion if gtag exists
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: "lead_signup" });
    }
  }, []);

  return (
    <main data-testid="thank-you-page" className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto animate-fade-up">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1
          data-testid="thank-you-title"
          className="heading-font mt-6 text-4xl sm:text-5xl font-bold tracking-tighter animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          ¡Gracias por unirte!
        </h1>
        <p
          className="mt-4 text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Acabamos de enviarte la <strong>Guía PDF de Primeros Auxilios</strong> a tu correo.
          Revisa tu bandeja de entrada (y la carpeta de spam, por si acaso).
        </p>

        <div
          className="mt-10 grid sm:grid-cols-2 gap-4 max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            to="/"
            data-testid="thanks-back-home"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-zinc-300 hover:border-zinc-400 text-zinc-800 font-semibold rounded-full transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <a
            href="/#chat"
            data-testid="thanks-go-chat"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg shadow-emerald-600/25 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Hablar con VetBot
          </a>
        </div>

        <div className="mt-16 relative animate-fade-up" style={{ animationDelay: "320ms" }}>
          <img
            src="https://images.unsplash.com/photo-1633587376982-a9c3d1f4ce65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxkb2clMjBydW5uaW5nJTIwcGFya3xlbnwwfHx8fDE3ODEyMzU5NTl8MA&ixlib=rb-4.1.0&q=85"
            alt="Perro feliz corriendo"
            className="w-full rounded-[2rem] aspect-[16/9] object-cover shadow-xl shadow-zinc-200/50"
          />
          <p className="mt-4 text-sm text-zinc-500">
            Mientras tanto, explora nuestras guías paso a paso para mantener
            sana y feliz a tu mascota.
          </p>
        </div>
      </div>
    </main>
  );
}
