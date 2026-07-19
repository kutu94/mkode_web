import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, GitBranch, ShieldCheck, Workflow } from "lucide-react";
import LeadFitForm from "./LeadFitForm";

const canonicalUrl = "https://www.mkode.es/consultoras-mexico";
const publishedDate = "2026-07-19";
const faqItems = [
  ["¿El sprint incluye un CRM nuevo?", "No necesariamente. Trabajamos con las herramientas existentes cuando son adecuadas. Una migración completa o la implantación integral de un CRM requiere otro alcance."],
  ["¿Qué significa un flujo prioritario?", "Es una secuencia concreta con un inicio, estados, reglas y un resultado operativo identificable. No incluye todos los procesos comerciales de la empresa."],
  ["¿Qué se considera una integración?", "La conexión técnica con una herramienta externa, como correo, CRM, formulario, calendario, base de datos o sistema interno."],
  ["¿Qué es una regla de negocio?", "Es una condición que determina qué debe hacer el sistema, cuándo debe detenerse o cuándo debe solicitar revisión humana."],
  ["¿La inteligencia artificial toma decisiones automáticamente?", "Solo dentro de los límites acordados. Las decisiones sensibles, ambiguas o excepcionales pueden requerir aprobación humana."],
  ["¿MKode garantiza más ventas o reuniones?", "No. El sprint puede mejorar la ejecución, consistencia y trazabilidad del flujo, pero los resultados comerciales dependen de otros factores."],
  ["¿Cuándo comienzan los diez días hábiles?", "Cuando el alcance está aprobado y están disponibles los accesos, datos de prueba y responsable de validación."],
  ["¿Qué sucede si el alcance no encaja?", "MKode lo indicará durante la revisión inicial y podrá recomendar dividir el problema o preparar una propuesta diferente."],
] as const;

export const metadata: Metadata = {
  title: "Automatización comercial para consultoras en México",
  description: "Sprint de 10 días hábiles para automatizar un flujo comercial prioritario, con hasta 3 integraciones, 5 reglas de negocio, pruebas y documentación.",
  authors: [{ name: "Equipo MKode", url: "https://www.mkode.es" }],
  alternates: { canonical: "/consultoras-mexico" },
  openGraph: {
    title: "Sprint Flujo Comercial Sin Fugas | MKode",
    description: "Automatice un flujo comercial prioritario con alcance definido, integraciones, reglas, pruebas y documentación.",
    url: canonicalUrl,
    type: "website",
    locale: "es_MX",
    siteName: "MKode",
  },
};

export default function MexicoConsultanciesPage() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://www.mkode.es/#organization", name: "MKode", legalName: "MKode LLC", url: "https://www.mkode.es" },
      { "@type": "WebPage", "@id": `${canonicalUrl}#webpage`, url: canonicalUrl, name: "Automatización comercial para consultoras en México", description: metadata.description, inLanguage: "es-MX", datePublished: publishedDate, dateModified: publishedDate, author: { "@id": "https://www.mkode.es/#organization" }, publisher: { "@id": "https://www.mkode.es/#organization" }, mainEntity: { "@id": `${canonicalUrl}#service` } },
      { "@type": "Service", "@id": `${canonicalUrl}#service`, name: "Sprint Flujo Comercial Sin Fugas", serviceType: "Automatización e integración de un flujo comercial prioritario", provider: { "@id": "https://www.mkode.es/#organization" }, areaServed: { "@type": "Country", name: "México" }, description: "Sprint de 10 días hábiles para un flujo prioritario, hasta tres integraciones y cinco reglas de negocio, con pruebas, documentación y entrega." },
      { "@type": "FAQPage", "@id": `${canonicalUrl}#faq`, mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };

  return (
    <div className="pb-20 md:pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />

      <section className="container mx-auto grid max-w-[1240px] gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Automatización comercial para consultoras en México</p>
          <h1 className="mb-7 text-4xl font-bold leading-tight tracking-tighter text-white md:text-6xl">Convierta un flujo comercial con pasos manuales en un sistema trazable.</h1>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">MKode analiza un flujo prioritario, conecta las herramientas que usted ya utiliza y automatiza su ejecución y seguimiento dentro de un alcance definido.</p>
          <p className="mb-9 text-sm font-semibold leading-relaxed text-white/80">Un flujo · Hasta 3 integraciones · Hasta 5 reglas de negocio · 10 días hábiles</p>
          <Cta location="hero" />
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-white/65">Primero verificamos el proceso y sus dependencias. Si el alcance no encaja, no recomendaremos iniciar el sprint.</p>
        </div>
        <div className="glass-card rounded-[28px] p-7 md:p-10">
          <p className="mb-7 text-xs font-bold uppercase tracking-widest text-blue-300">Del paso manual al flujo controlado</p>
          <FlowStep number="01" text="Entrada identificada y datos validados" />
          <FlowStep number="02" text="Estado y siguiente acción registrados" />
          <FlowStep number="03" text="Reglas ejecutadas dentro de límites definidos" />
          <FlowStep number="04" text="Excepciones derivadas para revisión humana" last />
        </div>
      </section>

      <PageSection id="problema" title="Las oportunidades también se pierden entre pasos." intro="El problema no siempre es la falta de leads o herramientas. Muchas fugas aparecen cuando una persona debe recordar qué hacer, copiar información o comprobar manualmente si una oportunidad tiene un siguiente paso.">
        <div className="grid gap-5 md:grid-cols-2"><Card title="Información distribuida">El estado cambia entre hojas, correos, calendarios y CRM sin una fuente común.</Card><Card title="Seguimientos dependientes de memoria">La siguiente acción depende de que alguien revise una lista o recuerde una fecha.</Card><Card title="Traspasos sin trazabilidad">Comercial, operaciones y administración no siempre comparten el mismo contexto.</Card><Card title="Reporting manual">Preparar un estado fiable requiere revisar varias herramientas.</Card></div>
      </PageSection>

      <PageSection title="¿Cuándo tiene sentido este sprint?" intro="Está diseñado para consultoras con un proceso reconocible que necesitan reducir pasos manuales y registrar mejor su ejecución.">
        <div className="grid gap-6 lg:grid-cols-2"><ListBlock title="Encaja cuando" items={["Existe un flujo comercial repetido.", "Participan varias herramientas o responsables.", "Pueden definirse reglas verificables.", "Existe una persona que validará decisiones y excepciones."]} /><ListBlock title="No encaja cuando" items={["El proceso todavía cambia cada semana.", "Se necesita reconstruir todo el stack.", "Se esperan ventas o reuniones garantizadas.", "El alcance requiere varios procesos o un producto completo."]} /></div>
      </PageSection>

      <PageSection id="alcance" eyebrow="Sprint Flujo Comercial Sin Fugas" title="Un flujo prioritario, con alcance cerrado y una entrega operativa." intro="Seleccionamos una fuga concreta del proceso comercial y construimos un sistema que ejecute, registre o prepare sus siguientes pasos según reglas acordadas.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"><ScopeCard title="Un flujo prioritario">Registro y seguimiento, actualización de estados, preparación de comunicaciones o traspaso hacia operaciones.</ScopeCard><ScopeCard title="Hasta 3 integraciones">Conectamos hasta tres herramientas cuando sus accesos y capacidades técnicas lo permiten.</ScopeCard><ScopeCard title="Hasta 5 reglas">Documentamos condiciones, acciones, excepciones y revisiones humanas.</ScopeCard><ScopeCard title="Pruebas controladas">Validamos escenarios normales, datos incompletos, errores y recuperación.</ScopeCard><ScopeCard title="Documentación y entrega">Entregamos flujo, reglas, dependencias, errores conocidos y guía operativa.</ScopeCard><ScopeCard title="10 días hábiles">El plazo comienza con alcance, accesos, responsable y datos de prueba disponibles.</ScopeCard></div>
        <div className="mt-10"><Cta location="scope" /></div>
      </PageSection>

      <PageSection title="Ejemplo orientativo: seguimiento de una oportunidad" intro="El diseño final depende del proceso y las herramientas del cliente. Este ejemplo no representa un resultado garantizado.">
        <div className="grid gap-6 lg:grid-cols-2"><ListBlock title="Antes" items={["El lead llega por formulario o correo.", "Una persona copia los datos.", "El seguimiento se anota manualmente.", "Las excepciones dependen de revisión informal."]} /><ListBlock title="Con el sistema" items={["El lead entra con un identificador estable.", "Los datos necesarios se validan.", "Estados y tareas quedan registrados.", "Las excepciones se derivan con contexto."]} /></div>
        <p className="mt-7 text-sm text-white/70">Consulte también nuestros <Link href="/cases" className="text-blue-300 underline">ejemplos orientativos de aplicación</Link>.</p>
      </PageSection>

      <PageSection id="proceso" title="Cómo se desarrolla el sprint">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"><ProcessCard number="01" title="Diagnóstico">Confirmamos flujo, responsables, herramientas y línea base.</ProcessCard><ProcessCard number="02" title="Arquitectura">Definimos estados, reglas, integraciones, controles y límites.</ProcessCard><ProcessCard number="03" title="Implementación">Construimos y probamos escenarios normales y excepcionales.</ProcessCard><ProcessCard number="04" title="Entrega">Documentamos operación, dependencias y métricas acordadas.</ProcessCard></div>
      </PageSection>

      <PageSection title="Ingeniería verificable antes que promesas.">
        <div className="grid gap-5 md:grid-cols-2"><Card title="Alcance antes de construir">Las reglas, integraciones y exclusiones se documentan antes de comenzar.</Card><Card title="Revisión humana">Las decisiones sensibles y excepciones pueden conservar aprobación humana.</Card><Card title="Pruebas antes de operar">El flujo se valida con datos controlados antes de utilizar información real.</Card><Card title="Sin resultados garantizados">MKode no garantiza ventas, respuestas, reuniones o ingresos.</Card></div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h3 className="mb-3 text-lg font-bold text-white">Inversión definida antes de comenzar</h3><p className="text-sm leading-relaxed text-white/75">Tras la revisión de encaje, MKode confirma el alcance, dependencias, inversión y condiciones. No se inicia ninguna implementación sin una propuesta cerrada.</p></div>
      </PageSection>

      <PageSection id="preguntas" title="Preguntas frecuentes">
        <div className="space-y-4">{faqItems.map(([question, answer]) => <details key={question} className="glass-card rounded-2xl p-6"><summary className="cursor-pointer font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">{question}</summary><p className="mt-4 text-sm leading-relaxed text-white/75">{answer}</p></details>)}</div>
      </PageSection>

      <section id="revision-encaje" className="scroll-mt-28 md:scroll-mt-16">
        <div className="container mx-auto grid max-w-[1100px] gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">Revisión inicial</p><h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">Solicite una revisión de encaje</h2><p className="text-base leading-relaxed text-white/75">Comparta el proceso que desea revisar. Utilizaremos esta información para valorar si puede resolverse dentro del sprint.</p></div>
          <div className="glass-card rounded-[28px] p-6 sm:p-8 md:p-10"><LeadFitForm /></div>
        </div>
      </section>

      <footer className="container mx-auto max-w-[1240px] px-4 text-sm text-white/65 sm:px-6"><p>Autor: Equipo MKode · Responsable editorial: Marcos Quintana</p><p className="mt-2">Publicado y revisado el 19 de julio de 2026.</p></footer>
    </div>
  );
}

function Cta({ location }: { location: string }) { return <Link href="#revision-encaje" data-analytics-event="fit_review_cta" data-analytics-location={location} className="inline-flex rounded-2xl px-7 py-4 text-xs font-bold uppercase tracking-widest text-white btn-gradient soft-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:text-sm">Solicitar revisión de encaje</Link>; }
function PageSection({ id, eyebrow, title, intro, children }: { id?: string; eyebrow?: string; title: string; intro?: string; children: React.ReactNode }) { return <section id={id} className="container mx-auto max-w-[1240px] scroll-mt-28 px-4 py-16 sm:px-6 md:scroll-mt-16 md:py-24">{eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">{eyebrow}</p>}<h2 className="mb-6 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>{intro && <p className="mb-10 max-w-4xl text-base leading-relaxed text-white/75 md:text-lg">{intro}</p>}{children}</section>; }
function Card({ title, children }: { title: string; children: React.ReactNode }) { return <article className="glass-card rounded-2xl p-6"><h3 className="mb-3 text-lg font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-white/75">{children}</p></article>; }
function ScopeCard({ title, children }: { title: string; children: React.ReactNode }) { return <article className="glass-card rounded-2xl p-6"><Workflow className="mb-5 h-6 w-6 text-blue-300" /><h3 className="mb-3 text-lg font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-white/75">{children}</p></article>; }
function ListBlock({ title, items }: { title: string; items: readonly string[] }) { return <div className="glass-card rounded-2xl p-6"><h3 className="mb-5 text-xl font-bold text-white">{title}</h3><ul className="space-y-4">{items.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/75"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />{item}</li>)}</ul></div>; }
function ProcessCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <article className="glass-card rounded-2xl p-6"><span className="mb-5 block text-sm font-bold text-blue-300">{number}</span><h3 className="mb-3 text-lg font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-white/75">{children}</p></article>; }
function FlowStep({ number, text, last = false }: { number: string; text: string; last?: boolean }) { return <div className="flex gap-4"><div className="flex flex-col items-center"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/40 text-xs font-bold text-blue-300">{number}</span>{!last && <span className="h-10 w-px bg-white/15" />}</div><p className="pt-2 text-sm leading-relaxed text-white/75">{text}</p></div>; }
