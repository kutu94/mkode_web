"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, CheckCircle2, Clock, Settings, ShieldCheck, Workflow, Zap } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary-blue">Ingeniería de automatización e IA</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto mb-8 max-w-5xl text-4xl font-bold leading-[1.05] tracking-tighter text-white md:text-7xl">Conectamos herramientas y reducimos el <span className="text-primary-blue">trabajo manual</span> de sus operaciones.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto mb-12 max-w-3xl text-lg font-light leading-relaxed text-white/60 md:text-xl">Diseñamos sistemas con reglas, trazabilidad y supervisión humana para procesos que hoy dependen de tareas repetitivas o datos desconectados.</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-6 text-left md:grid-cols-3">
            <HeroBullet icon={<Workflow className="h-5 w-5" />} text="Un flujo y sus dependencias antes que una colección de herramientas." />
            <HeroBullet icon={<ShieldCheck className="h-5 w-5" />} text="Validación humana en decisiones y excepciones sensibles." />
            <HeroBullet icon={<Clock className="h-5 w-5" />} text="Métricas definidas antes de evaluar cualquier mejora." />
          </motion.div>
          <Link href="/contact" className="inline-flex rounded-2xl px-10 py-4 text-sm font-bold uppercase tracking-widest text-white btn-gradient soft-shadow">Solicitar revisión de encaje</Link>
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-6">
        <div className="glass-card rounded-[32px] p-12 md:p-20">
          <div className="mb-16 max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Fricciones operativas que conviene medir</h2>
            <p className="text-lg leading-relaxed text-white/60">La automatización comienza con una línea base: tiempo invertido, errores, esperas, duplicados y excepciones. Sin esa referencia no atribuimos un resultado al sistema.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PainCard title="Tareas manuales repetitivas" />
            <PainCard title="Leads sin siguiente paso" />
            <PainCard title="Datos duplicados entre sistemas" />
            <PainCard title="Excepciones sin responsable" />
            <PainCard title="Reporting y seguimiento manual" />
            <PainCard title="Procesos sin trazabilidad" />
          </div>
        </div>
      </section>

      <section id="sistemas" className="container mx-auto max-w-[1240px] px-6">
        <div className="mb-16"><h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Qué construimos</h2><p className="text-lg text-white/60">Infraestructura técnica adaptada al proceso y al stack existente.</p></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <SystemCard icon={<Settings className="h-10 w-10" />} title="Automatización de procesos" desc="Flujos con reglas, estados, aprobaciones, manejo de errores y registro de actividad." />
          <SystemCard icon={<Zap className="h-10 w-10" />} title="Integraciones y APIs" desc="Conexión entre herramientas para reducir la doble entrada y mantener datos consistentes." />
          <SystemCard icon={<BrainCircuit className="h-10 w-10" />} title="Agentes de IA operativos" desc="Asistencia de IA dentro de límites definidos, con contexto, validación y escalado humano." />
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-6">
        <div className="glass-card rounded-[32px] p-12 md:p-20">
          <div className="mb-12 max-w-3xl"><h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Cómo evaluamos el impacto</h2><p className="text-lg text-white/60">Cada proyecto define sus métricas y supuestos antes de implementar. No garantizamos resultados comerciales que dependan de mercado, volumen, equipo o factores externos.</p></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Measure title="Antes" text="Documentamos el flujo, la línea base y las excepciones." />
            <Measure title="Durante" text="Probamos con datos controlados y registramos fallos." />
            <Measure title="Después" text="Comparamos métricas acordadas y documentamos límites." />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Ejemplos de aplicación</h2><p className="text-lg text-white/60">Escenarios orientativos, no resultados atribuidos ni promesas.</p></div>
          <Link href="/cases" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-blue">Ver escenarios <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <ExampleCard title="Triage de comunicaciones" text="Clasificación, derivación y seguimiento de excepciones." />
          <ExampleCard title="Seguimiento comercial" text="Estados, tareas y comunicaciones sujetas a aprobación." />
          <ExampleCard title="Sincronización SaaS" text="Validación, idempotencia y registro de errores entre herramientas." />
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-6">
        <h2 className="mb-20 text-center text-3xl font-bold tracking-tight md:text-5xl">Un proceso con alcance definido</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <ProcessStep num="01" title="Diagnóstico" desc="Mapeamos el proceso, los responsables y la línea base." />
          <ProcessStep num="02" title="Arquitectura" desc="Definimos integraciones, reglas, controles y límites." />
          <ProcessStep num="03" title="Implementación" desc="Construimos y probamos el flujo en un entorno controlado." />
          <ProcessStep num="04" title="Entrega" desc="Documentamos operación, excepciones y métricas." />
        </div>
      </section>

      <section className="container mx-auto max-w-[1240px] px-6">
        <div className="glass-card rounded-[32px] border-primary-blue/20 p-12 text-center md:p-20">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Analicemos un flujo concreto</h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-white/60">Si no identificamos una oportunidad clara, medible y con alcance razonable, no recomendaremos implementar un sistema.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-2xl px-10 py-4 text-sm font-bold uppercase tracking-widest text-white btn-gradient soft-shadow">Solicitar revisión <ArrowRight className="h-4 w-4" /></Link>
          <p className="mt-8 text-xs text-white/50">El tratamiento de solicitudes se describe en nuestro <Link href="/privacidad" className="text-primary-blue underline">aviso de privacidad</Link>.</p>
        </div>
      </section>
    </div>
  );
}

function HeroBullet({ icon, text }: { icon: ReactNode; text: string }) { return <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"><div className="mt-1 shrink-0 text-primary-blue">{icon}</div><p className="text-sm leading-snug text-white/70">{text}</p></div>; }
function PainCard({ title }: { title: string }) { return <motion.div {...fadeIn} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-6"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary-blue" /><span className="text-sm font-medium text-white/80">{title}</span></motion.div>; }
function SystemCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) { return <motion.article {...fadeIn} className="glass-card rounded-[24px] p-10"><div className="mb-8 text-primary-blue">{icon}</div><h3 className="mb-4 text-2xl font-bold">{title}</h3><p className="text-sm leading-relaxed text-white/60">{desc}</p></motion.article>; }
function Measure({ title, text }: { title: string; text: string }) { return <div><h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-primary-blue">{title}</h3><p className="text-sm leading-relaxed text-white/70">{text}</p></div>; }
function ExampleCard({ title, text }: { title: string; text: string }) { return <motion.article {...fadeIn} className="glass-card rounded-[28px] p-10"><h3 className="mb-4 text-2xl font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-white/60">{text}</p></motion.article>; }
function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) { return <motion.div {...fadeIn}><div className="glass-card mb-8 flex h-12 w-12 items-center justify-center rounded-full font-bold text-primary-blue">{num}</div><h3 className="mb-4 text-2xl font-bold">{title}</h3><p className="text-sm font-light leading-relaxed text-white/60">{desc}</p></motion.div>; }
