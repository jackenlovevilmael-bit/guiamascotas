import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Política de Privacidad | GuiaMascotas";
  }, []);

  return (
    <main
      data-testid="privacy-page"
      className="max-w-3xl mx-auto px-5 sm:px-8 py-16"
    >
      <h1 className="heading-font text-4xl sm:text-5xl font-bold tracking-tighter">
        Política de Privacidad
      </h1>
      <p className="text-sm text-zinc-500 mt-2">
        Última actualización: 1 de enero de 2026
      </p>

      <div className="prose prose-zinc mt-10 max-w-none text-zinc-700 leading-relaxed space-y-6 text-base">
        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">1. Quiénes somos</h2>
          <p>
            GuiaMascotas (en adelante, &quot;el Sitio&quot;) es un proyecto educativo
            sobre primeros auxilios y cuidados para perros y gatos. Esta
            política describe qué información recopilamos, cómo la usamos y
            tus derechos.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">2. Datos que recopilamos</h2>
          <p>
            Recopilamos los datos que tú nos proporcionas voluntariamente al
            suscribirte a nuestro boletín: nombre, dirección de correo
            electrónico y tipo de mascota. Adicionalmente, recopilamos datos
            anónimos de navegación (cookies analíticas) para mejorar el sitio.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">3. Cómo usamos tus datos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Para enviarte el material gratuito que solicitaste.</li>
            <li>Para mandarte consejos y novedades sobre cuidado de mascotas.</li>
            <li>Para mejorar el contenido y experiencia del sitio.</li>
            <li>Para mostrar publicidad relevante a través de Google Ads.</li>
          </ul>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">4. Cookies y publicidad</h2>
          <p>
            Utilizamos cookies propias y de terceros (Google Ads, Google
            Analytics) para medir el tráfico y mostrar anuncios. Puedes
            desactivar las cookies en la configuración de tu navegador.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">5. Compartir con terceros</h2>
          <p>
            No vendemos tus datos. Solamente compartimos información con
            proveedores que nos ayudan a operar el sitio (proveedor de email,
            hosting, analítica) y únicamente lo necesario para entregar el
            servicio.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">6. Tus derechos</h2>
          <p>
            Puedes solicitar acceso, modificación o eliminación de tus datos
            personales en cualquier momento escribiéndonos a{" "}
            <a
              className="text-emerald-700 underline"
              href="mailto:hola@guiamascotas.com"
            >
              hola@guiamascotas.com
            </a>
            . Cada email que te enviamos contiene un enlace para darte de baja.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">7. Aviso médico</h2>
          <p>
            La información publicada es educativa y no sustituye el
            diagnóstico ni tratamiento veterinario profesional. Ante cualquier
            emergencia, contacta a un veterinario inmediatamente.
          </p>
        </section>

        <section>
          <h2 className="heading-font text-2xl font-semibold text-zinc-900">8. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política periódicamente. La versión
            vigente siempre estará publicada en esta misma página, indicando
            la fecha de su última modificación.
          </p>
        </section>
      </div>
    </main>
  );
}
