import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="border-t border-zinc-200 bg-white mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
              <PawPrint className="w-5 h-5" />
            </span>
            <span className="heading-font text-xl font-bold">
              Guia<span className="text-emerald-600">Mascotas</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-zinc-600 max-w-md leading-relaxed">
            Tu recurso confiable para el cuidado de perros y gatos.
            Información educativa, guías de primeros auxilios y un asistente
            con IA. Siempre consulta a un veterinario ante una emergencia real.
          </p>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Sitio
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/#sintomas" data-testid="footer-link-sintomas" className="text-zinc-700 hover:text-emerald-700">
                Síntomas
              </a>
            </li>
            <li>
              <a href="/#emergencia" data-testid="footer-link-emergencia" className="text-zinc-700 hover:text-emerald-700">
                Emergencias
              </a>
            </li>
            <li>
              <a href="/#kit" data-testid="footer-link-kit" className="text-zinc-700 hover:text-emerald-700">
                Kit de primeros auxilios
              </a>
            </li>
            <li>
              <a href="/#chat" data-testid="footer-link-chat" className="text-zinc-700 hover:text-emerald-700">
                Asistente IA
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Legal
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacidad" data-testid="footer-link-privacidad" className="text-zinc-700 hover:text-emerald-700">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos" data-testid="footer-link-terminos" className="text-zinc-700 hover:text-emerald-700">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <a href="mailto:hola@guiamascotas.com" data-testid="footer-link-contacto" className="text-zinc-700 hover:text-emerald-700">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <div>© 2026 GuiaMascotas. Información educativa, no sustituye consulta veterinaria.</div>
          <div>Hecho con cariño para tus mascotas.</div>
        </div>
      </div>
    </footer>
  );
}
