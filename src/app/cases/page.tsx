"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Search, Workflow } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const examples = [
  {
    title: "Triage inteligente de comunicaciones",
    context: "Ejemplo de aplicación · resultado sujeto al proceso",
    problem: "Correos entrantes que requieren clasificación manual antes de llegar al equipo responsable.",
    solution: "Clasificación por reglas y asistencia de IA, con registro y derivación hacia el sistema operativo correspondiente.",
    measure: "Tiempo de clasificación, derivaciones correctas y excepciones que requieren revisión humana.",
    tags: ["Clasificación", "Integración", "Supervisión"],
    icon: <MessageSquare className="h-8 w-8" />,
  },
  {
    title: "Seguimiento de oportunidades B2B",
    context: "Ejemplo de aplicación · no representa un resultado garantizado",
    problem: "Leads y seguimientos distribuidos entre hojas, correo y herramientas sin un estado común.",
    solution: "Flujo que registra estados, programa tareas y prepara comunicaciones sujetas a reglas de aprobación.",
    measure: "Tiempo hasta el seguimiento, oportunidades sin siguiente paso y trazabilidad de cada contacto.",
    tags: ["Outreach", "Workflow", "Datos"],
    icon: <Search className="h-8 w-8" />,
  },
  {
    title: "Sincronización de herramientas SaaS",
    context: "Ejemplo de aplicación · alcance definido tras diagnóstico",
    problem: "Doble entrada de datos entre herramientas que genera retrabajo y diferencias entre registros.",
    solution: "Integración con validaciones, identificadores estables, registro de errores y recuperación controlada.",
    measure: "Registros duplicados, errores de sincronización, tiempo manual y excepciones pendientes.",
    tags: ["APIs", "Integridad", "Observabilidad"],
    icon: <Workflow className="h-8 w-8" />,
  },
];

export default function CasesPage() {
  return (
    <div className="container mx-auto min-h-screen max-w-[1240px] px-6 py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-24 max-w-3xl">
        <div className="mb-8 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-blue">Ejemplos de aplicación</div>
        <h1 className="mb-8 text-4xl font-bold leading-tight tracking-tighter text-white md:text-7xl">Sistemas con <span className="text-primary-blue">impacto medible.</span></h1>
        <p className="text-xl font-light leading-relaxed text-white/60">Estos escenarios muestran problemas que podemos analizar. No son testimonios, casos atribuidos ni promesas de resultados. El impacto depende del proceso, los datos y el alcance acordado.</p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {examples.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card grid grid-cols-1 gap-12 rounded-[40px] p-8 transition-all hover:border-primary-blue/20 md:p-14 lg:grid-cols-2">
            <div className="flex flex-col">
              <div className="mb-8 flex items-center gap-4 text-primary-blue">{item.icon}<div className="h-px flex-grow bg-white/5" /></div>
              <div className="mb-6 flex flex-wrap gap-2">{item.tags.map(tag => <span key={tag} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/50">{tag}</span>)}</div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{item.title}</h2>
              <div className="mb-10 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-blue">{item.context}</div>
              <Detail title="Problema observado">{item.problem}</Detail>
              <Detail title="Sistema posible" accent>{item.solution}</Detail>
            </div>
            <div className="flex flex-col justify-center rounded-[32px] border border-white/5 bg-white/[0.02] p-10 md:p-16">
              <span className="mb-6 text-[11px] font-bold uppercase tracking-widest text-white/60">Métricas que conviene validar</span>
              <p className="text-xl font-semibold leading-relaxed text-white">{item.measure}</p>
              <p className="mt-8 text-sm leading-relaxed text-white/60">La línea base y los objetivos se acuerdan antes de implementar. MKode no garantiza resultados comerciales que dependan de factores externos.</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="glass-card mt-32 rounded-[40px] border-primary-blue/10 p-12 text-center md:p-16">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">Analicemos un flujo concreto</h2>
        <p className="mx-auto mb-12 max-w-2xl font-light text-white/60">Identificamos la situación actual, las dependencias y la forma de medir una mejora antes de recomendar una implementación.</p>
        <Link href="/contact" className="inline-flex items-center gap-3 rounded-2xl px-12 py-5 text-sm font-bold uppercase tracking-widest text-white btn-gradient soft-shadow transition-all hover:scale-105">Solicitar revisión de encaje <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </div>
  );
}

function Detail({ title, accent = false, children }: { title: string; accent?: boolean; children: ReactNode }) {
  return <div className="mb-8"><h3 className={`mb-3 text-xs font-bold uppercase tracking-widest ${accent ? "text-primary-blue" : "text-white/60"}`}>{title}</h3><p className="text-sm font-light leading-relaxed text-white/70">{children}</p></div>;
}
