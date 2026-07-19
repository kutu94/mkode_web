import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Información sobre el tratamiento de datos personales y el ejercicio de derechos ante MKode LLC.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-32">
      <article className="container mx-auto max-w-4xl px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary-blue">MKode · Aviso de privacidad</p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">Aviso de privacidad</h1>
        <p className="mb-10 text-sm text-white/60">Borrador para revisión jurídica · Última actualización: 19 de julio de 2026</p>

        <div className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-sm leading-relaxed text-amber-100" role="note">
          Este documento es un borrador operativo y debe recibir revisión jurídica antes de su publicación definitiva. Su contenido no constituye una afirmación de cumplimiento legal final.
        </div>

        <div className="space-y-10 text-sm leading-7 text-white/70 md:text-base">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. Responsable del tratamiento</h2>
            <p>MKode LLC ("MKode") es responsable del tratamiento de los datos personales descritos en este aviso.</p>
            <p className="mt-3">Registered Agent: Registered Agents Inc<br />Domicilio legal registrado: 30 N Gould St, Ste R, Sheridan, WY 82801, USA<br />Contacto: <a className="text-primary-blue underline" href="mailto:marcos.quintana@mkode.es">marcos.quintana@mkode.es</a></p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. Datos que tratamos</h2>
            <p>El formulario de contacto puede recoger nombre, correo electrónico corporativo, empresa, rango de facturación opcional, horas semanales aproximadas dedicadas a tareas manuales, principal ineficiencia detectada y comentarios adicionales. También podemos tratar cargo profesional, ubicación profesional e información pública relevante sobre la actividad de la empresa, así como eventos técnicos de entrega, apertura, clic, respuesta, rebote o baja cuando el proveedor de correo los facilita.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. Origen de los datos</h2>
            <p>Los datos pueden proceder de la información enviada directamente mediante nuestros formularios o comunicaciones, de fuentes públicas, sitios web corporativos, directorios y redes profesionales, y de proveedores de verificación de correo.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Finalidades</h2>
            <p>Utilizamos los datos para responder solicitudes, evaluar si los servicios de automatización e integración de MKode pueden resultar relevantes, gestionar comunicaciones comerciales B2B personalizadas, respuestas y reuniones, medir el funcionamiento técnico de las campañas y mantener una lista mínima de supresión cuando una persona solicita no recibir más comunicaciones.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. Proveedores y transferencias</h2>
            <p>Para operar estos procesos podemos utilizar Supabase para el almacenamiento de solicitudes, además de proveedores de correo, alojamiento, automatización, almacenamiento, hojas de cálculo e inteligencia artificial, incluidos Brevo, Google, n8n y proveedores tecnológicos equivalentes. Estos proveedores pueden tratar datos por cuenta de MKode y operar desde otros países conforme a sus condiciones y mecanismos legales aplicables.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Conservación</h2>
            <p>Como criterio operativo inicial, conservamos los datos de prospección inactiva durante un máximo de doce meses, salvo que sea necesario conservarlos durante más tiempo por una relación contractual, una obligación legal o la defensa de derechos. Cuando una persona solicita la baja, podemos conservar únicamente los datos mínimos necesarios para respetar esa decisión.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">7. Derechos y oposición comercial</h2>
            <p>Puede solicitar acceso, rectificación, cancelación o supresión, oponerse al tratamiento, limitarlo cuando corresponda o retirar su consentimiento. También puede pedir en cualquier momento no recibir más comunicaciones comerciales.</p>
            <p className="mt-3">Para ejercer estos derechos, escriba a <a className="text-primary-blue underline" href="mailto:marcos.quintana@mkode.es">marcos.quintana@mkode.es</a> indicando su nombre, empresa, solicitud y un medio para comunicar la respuesta. Podremos pedir información adicional únicamente para verificar su identidad.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">8. Seguridad y cambios</h2>
            <p>Aplicamos medidas organizativas y técnicas razonables para reducir riesgos de acceso, pérdida, alteración o divulgación no autorizada. Este aviso puede actualizarse cuando cambien los procesos, proveedores o requisitos aplicables. La versión vigente indicará su fecha de actualización.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
