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
        <p className="mb-10 text-sm text-white/60">Borrador para revisión jurídica · Versión 2026-07-19-draft-v1 · Última actualización: 19 de julio de 2026</p>
        <div className="mb-12 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 text-sm leading-relaxed text-amber-100" role="note">
          Este documento es un BORRADOR operativo pendiente de revisión jurídica. No constituye una afirmación de cumplimiento legal final ni debe interpretarse como asesoramiento jurídico.
        </div>

        <div className="space-y-10 text-sm leading-7 text-white/70 md:text-base">
          <section>
            <h2 className="mb-3 text-xl font-bold text-white">1. Responsable del tratamiento</h2>
            <p>MKode LLC (&quot;MKode&quot;) es responsable del tratamiento de los datos personales descritos en este borrador.</p>
            <p className="mt-3">
              Registered Agent: Registered Agents Inc<br />
              Dirección registrada del agente: 30 N Gould St, Ste R, Sheridan, WY 82801, USA. Su idoneidad como domicilio para efectos de privacidad está pendiente de confirmación jurídica.<br />
              Contacto provisional: <a className="text-primary-blue underline" href="mailto:marcos.quintana@mkode.es">marcos.quintana@mkode.es</a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">2. Datos que tratamos</h2>
            <p>El formulario puede recoger nombre, correo electrónico corporativo, empresa, cargo o responsabilidad, información sobre la fuga o paso manual, herramientas y sistemas implicados, horas aproximadas dedicadas al proceso y comentarios adicionales. También puede tratarse información técnica mínima necesaria para operar y proteger el formulario.</p>
            <p className="mt-3 font-medium text-amber-100">No incluya datos sensibles, información confidencial ni datos personales de terceros. El formulario está dirigido a profesionales mayores de edad.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">3. Origen de los datos</h2>
            <p>Los datos pueden proceder de la información enviada directamente mediante nuestros formularios o comunicaciones, de fuentes públicas, sitios web corporativos, directorios y redes profesionales, y de proveedores de verificación de correo.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">4. Finalidades primarias</h2>
            <p>Los datos enviados mediante el formulario de revisión de encaje se utilizarán para evaluar si existe encaje con los servicios de MKode, atender la solicitud recibida y contactar con la persona solicitante en relación con ella.</p>
            <p className="mt-3">La casilla del formulario confirma únicamente que la persona ha leído este aviso. No constituye consentimiento para comunicaciones de marketing.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">5. Marketing futuro</h2>
            <p>Cualquier finalidad futura de marketing deberá tratarse de forma separada, con su base jurídica, información y mecanismo de oposición o consentimiento cuando corresponda. Este borrador no atribuye esa finalidad a la aceptación del formulario.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">6. Proveedores y flujo por verificar</h2>
            <p>El flujo técnico previsto utiliza Vercel para alojar y ejecutar la aplicación y Supabase para almacenar las solicitudes. Las condiciones contractuales aplicables, ubicaciones de tratamiento, subencargados y posibles transferencias internacionales están pendientes de verificación antes de la publicación definitiva. Este borrador no afirma una región concreta ni un mecanismo de transferencia validado.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">7. Conservación propuesta</h2>
            <p>Como política operativa propuesta, las solicitudes que no den lugar a una relación comercial se conservarían durante un máximo de doce meses y después se eliminarían o anonimizarían, salvo necesidad documentada de conservación. Este plazo es una propuesta interna pendiente de validación y no se presenta como un periodo legal obligatorio.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">8. Derechos ARCO y contacto provisional</h2>
            <p>La persona interesada podrá solicitar acceso, rectificación, cancelación u oposición, así como otros derechos que resulten aplicables. Mientras se completa la revisión jurídica, el canal provisional para estas solicitudes es <a className="text-primary-blue underline" href="mailto:marcos.quintana@mkode.es">marcos.quintana@mkode.es</a>.</p>
            <p className="mt-3">El procedimiento, los plazos, la información necesaria para verificar identidad y la jurisdicción aplicable están pendientes de confirmación jurídica.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">9. Seguridad</h2>
            <p>MKode prevé aplicar medidas organizativas y técnicas proporcionales para reducir riesgos de acceso, pérdida, alteración o divulgación no autorizada. La descripción definitiva de estas medidas dependerá de la verificación del flujo técnico y de los proveedores.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-bold text-white">10. Cambios y control de versiones</h2>
            <p>Este borrador podrá cambiar cuando se confirmen las bases jurídicas, los proveedores, el flujo de datos, los periodos de conservación y el procedimiento de derechos. Cada actualización identificará su fecha y versión. La versión mostrada actualmente es 2026-07-19-draft-v1.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
