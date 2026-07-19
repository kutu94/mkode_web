"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Search, Workflow } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const examples = [
  { title: "Triage inteligente de comunicaciones", context: "Ejemplo de aplicación · resultado sujeto al proceso", problem: "Correos entrantes que requieren clasificación manual antes de llegar al equipo responsable.", solution: "Clasificación por reglas y asistencia de IA, con registro y derivación hacia el sistema operativo correspondiente.", measure: "Tiempo de clasificación, derivaciones correctas y excepciones que requieren revisión humana.", tags: ["Clasificación", "Integración", "Supervisión"], icon: <MessageSquare className="h-8 w-8" /> },
  { title: "Seguimiento de oportunidades B2B", context: "Ejemplo de aplicación · no representa un resultado garantizado", problem: "Leads y seguimientos distribuidos entre hojas, correo y herramientas sin un estado común.", solution: "Flujo que registra estados, programa tareas y prepara comunicaciones sujetas a reglas de aprobación.", measure: "Tiempo hasta el seguimiento, oportunidades sin siguiente paso y trazabilidad de cada contacto.", tags: ["Outreach", "Workflow", "Datos"], icon: <Search className="h-8 w-8" /> },
  { title: "Sincronización de herramientas SaaS", context: "Ejemplo de aplicación · alcance definido tras diagnóstico", problem: "Doble entrada de datos entre herramientas que genera retrabajo y diferencias entre registros.", solution: "Integración con validaciones, identificadores estables, registro de errores y recuperación controlada.", measure: "Registros duplicados, errores de sincronización, tiempo manual y excepciones pendientes.", tags: ["APIs", "Integridad", "Observabilidad"], icon: <Workflow className="h-8 w-8" /> },
];

export default function CasesPage() {
  return (
    <div className="container mx-auto min-h-screen max-w-[1240px] px-4 py-20 sm:px-6 md:py-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-3xl md:mb-24">
        <div className="mb-6 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 md:mb-8">Ejemplos de aplicación</div>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-white md:mb-8 md:text-7xl">Sistemas con <span className="text-blue-300">impacto medible.</span></h1>
        <p className="text-lg font-light leading-relaxed text-white/70 md:text-xl">Estos escenarios muestran problemas que podemos analizar. No son testimonios, casos atribuidos ni promesas de resultados. El impacto depende del proceso, los datos y el alcance acordado.</p>
      </motion.div>

      <div className="flex flex-col gap-8 md:gap-12">
        {examples.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card grid grid-cols-1 gap-8 rounded-[28px] p-6 transition-all hover:border-primary-blue/20 sm:p-8 md:gap-12 md:rounded-[40px] md:p-14 lg:grid-cols-2">
            <div className="flex flex-col">
              <div className="mb-6 flex items-center gap-4 text-blue-300 md:mb-8">{item.icon}<div className="h-px flex-grow bg-white/10" /></div>
              <div className="mb-5 flex flex-wrap gap-2 md:mb-6">{item.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/70">{tag}</span>)}</div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">{item.title}</h2>
              <div className="mb-8 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-300 md:mb-10 md:tracking-[0.2em]">{item.context}</div>
              <Detail title="Problema observado">{item.problem}</Detail><Detail title="Sistema posible" accent>{item.solution}</Detail>
            </div>
            <div className="flex flex-col justify-center rounded-[24px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:rounded-[32px] md:p-16">
              <span className="mb-5 text-[11px] font-bold uppercase tracking-widest text-white/70 md:mb-6">Métricas que conviene validar</span>
              <p className="text-xl font-semibold leading-relaxed text-white">{item.measure}</p>
              <p className="mt-6 text-sm leading-relaxed text-white/70 md:mt-8">La línea base y los objetivos se acuerdan antes de implementar. MKode no garantiza resultados comerciales que dependan de factores externos.</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="glass-card mt-20 rounded-[28px] border-primary-blue/10 p-8 text-center md:mt-32 md:rounded-[40px] md:p-16">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">Analicemos un flujo concreto</h2>
        <p className="mx-auto mb-10 max-w-2xl font-light text-white/70 md:mb-12">Identificamos la situación actual, las dependencias y la forma de medir una mejora antes de recomendar una implementación.</p>
        <Link href="/contact" className="inline-flex items-center gap-3 rounded-2xl px-7 py-5 text-center text-xs font-bold uppercase tracking-widest text-white btn-gradient soft-shadow transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 sm:px-12 sm:text-sm">Solicitar revisión de encaje <ArrowRight className="h-4 w-4 shrink-0" /></Link>
      </div>
    </div>
  );
}
function Detail({ title, accent = false, children }: { title: string; accent?: boolean; children: ReactNode }) { return <div className="mb-7 md:mb-8"><h3 className={`mb-3 text-xs font-bold uppercase tracking-widest ${accent ? "text-blue-300" : "text-white/70"}`}>{title}</h3><p className="text-sm font-light leading-relaxed text-white/75">{children}</p></div>; }
