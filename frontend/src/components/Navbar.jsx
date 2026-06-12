import { Link, NavLink } from "react-router-dom";
import { PawPrint, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/#sintomas", label: "Síntomas" },
  { to: "/#emergencia", label: "Emergencias" },
  { to: "/#kit", label: "Kit" },
  { to: "/#chat", label: "Asistente IA" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-navbar"
      className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/70 border-b border-zinc-200/60"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-sm shadow-emerald-500/30 group-hover:rotate-[-6deg] transition-transform">
            <PawPrint className="w-5 h-5" />
          </span>
          <span className="heading-font text-xl font-bold tracking-tight">
            Guia<span className="text-emerald-600">Mascotas</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 text-sm font-medium text-zinc-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#lead"
            data-testid="nav-cta-newsletter"
            className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
          >
            Suscríbete gratis
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label="Menú"
            className="md:hidden w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200/60 bg-white/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-3 text-base font-medium text-zinc-800 hover:bg-emerald-50 rounded-2xl"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#lead"
              onClick={() => setOpen(false)}
              data-testid="mobile-nav-cta"
              className="mt-2 px-4 py-3 text-center font-semibold rounded-2xl bg-zinc-900 text-white"
            >
              Suscríbete gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
