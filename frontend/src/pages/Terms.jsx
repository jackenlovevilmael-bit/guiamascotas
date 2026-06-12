import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Términos y Condiciones | GuiaMascotas";
  }, []);

  return (
    <main data-testid="terms-page" className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <h1 className="heading-font text-4xl sm:text-5xl font-bold tracking-tighter">
        Términos y Condiciones
      </h1>
      <p className="text-sm text-zinc-500 mt-2">
        Última actualización: 1 de enero de 2026
      </p>

      <div className="mt-10 max-w-none text-zinc-700 leading-relaxed space-y-6 text-base">
        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">1. Aceptación</h2>
          <p>
            Al utilizar GuiaMascotas, aceptas estos Términos y Condiciones.
            Si no estás de acuerdo con alguno, te pedimos que no uses el
            sitio.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">2. Naturaleza del contenido</h2>
          <p>
            Todo el contenido publicado en este sitio (artículos, guías,
            respuestas del asistente IA, listas) es{" "}
            <strong>únicamente informativo y educativo</strong>. No constituye
            asesoría veterinaria profesional ni diagnóstico médico.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">3. Asistente con inteligencia artificial</h2>
          <p>
            El asistente &quot;VetBot&quot; es una herramienta automatizada basada en
            modelos de lenguaje. Sus respuestas pueden contener errores. No la
            uses como única referencia en situaciones de emergencia. Siempre
            consulta con un veterinario titulado.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">4. Limitación de responsabilidad</h2>
          <p>
            GuiaMascotas no se hace responsable por daños directos o
            indirectos derivados del uso de la información publicada. El
            usuario es responsable de las decisiones que tome respecto al
            cuidado de su mascota.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">5. Propiedad intelectual</h2>
          <p>
            Los textos, gráficos, logos y marcas mostrados en este sitio son
            propiedad de GuiaMascotas o se utilizan con permiso. Está
            prohibida su reproducción sin autorización por escrito.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">6. Enlaces a terceros</h2>
          <p>
            Podemos enlazar a sitios de terceros. No nos hacemos responsables
            por su contenido ni por sus políticas de privacidad.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">7. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Los cambios serán publicados en esta misma página.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">8. Contacto</h2>
          <p>
            Si tienes dudas sobre estos términos, escríbenos a{" "}
            <a
              className="text-emerald-700 underline"
              href="mailto:hola@guiamascotas.com"
            >
              hola@guiamascotas.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
