"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Settings,
  Zap,
  BrainCircuit,
  MessageSquare,
  Search,
  Workflow,
  ShieldCheck,
  LineChart,
  Clock,
  TrendingDown,
  Coins,
  ShieldAlert,
  Target,
  BarChart3,
  Calendar,
  Network,
  Cpu,
  Layers
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import CalendlyView from "@/components/CalendlyView";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false);

  if (showCalendly) {
    return (
      <div className="min-h-screen bg-grid-refined pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <CalendlyView />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-grid-refined min-h-screen">
      {/* 1. HERO - Corporate Architecture Focus */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-radial-hero border-b border-white/[0.04]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 text-[10px] uppercase tracking-[0.2em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
            Ingeniería de Sistemas de Automatización
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
            className="text-title text-5xl md:text-[5rem] mb-10 max-w-6xl mx-auto leading-[1] tracking-tighter"
          >
            Infraestructura de automatización e IA para <span className="text-primary-blue">operaciones empresariales</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/40 mb-16 max-w-4xl mx-auto leading-relaxed font-light text-balance"
          >
            Diseñamos y desplegamos sistemas que eliminan trabajo manual, integran herramientas y automatizan procesos críticos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link href="#sistemas" className="btn-primary text-center px-12 py-5 text-sm">
                Explorar ingeniería
              </Link>
              <Link href="/cases" className="btn-secondary text-center px-12 py-5 text-sm">
                Ver casos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEMA - Authority Focus */}
      <section className="py-48 container mx-auto px-6 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition as any}
          >
            <h2 className="text-title text-4xl md:text-7xl mb-12 tracking-tighter text-white leading-[1.1]">
              Las empresas no fallan por estrategia. <br />
              <span className="text-white/30 text-5xl">Fallan por operaciones manuales.</span>
            </h2>
            <div className="space-y-8 max-w-xl">
              <p className="text-white/40 text-xl font-light leading-relaxed">
                Procesos repetitivos, sistemas desconectados y dependencias humanas generan pérdida de margen, errores operativos y baja escalabilidad.
              </p>
              <p className="text-primary-blue text-xl font-medium">
                La automatización bien diseñada elimina estas fricciones.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 relative">
            <ProblemIcon icon={<ShieldAlert className="w-5 h-5" />} text="Fricción humana" />
            <ProblemIcon icon={<TrendingDown className="w-5 h-5" />} text="Margen perdido" />
            <ProblemIcon icon={<MessageSquare className="w-5 h-5" />} text="Sistemas aislados" />
            <ProblemIcon icon={<BarChart3 className="w-5 h-5" />} text="Baja escalabilidad" />
            <div className="absolute inset-0 bg-primary-blue/5 blur-[120px] rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* 3. QUÉ HACE MKODE - Architecture Blocks */}
      <section id="sistemas" className="py-48 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition as any}
            className="mb-32 text-center"
          >
            <h2 className="text-title text-4xl md:text-7xl mb-6">Arquitectura de automatización empresarial</h2>
            <p className="text-white/30 text-xl font-light">Capacidades técnicas de alto nivel para infraestructuras modernas.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ArchitectureCard
              icon={<Cpu className="w-10 h-10" />}
              title="Automatización de procesos"
              desc="Eliminación de tareas manuales mediante sistemas automatizados."
              examples={["Procesamiento de datos", "Generación de documentos", "Workflows internos"]}
            />
            <ArchitectureCard
              icon={<Network className="w-10 h-10" />}
              title="Integración de ecosistemas SaaS"
              desc="Conectamos herramientas que normalmente no se hablan entre sí."
              examples={["CRM", "ERP", "Sistemas de facturación", "Plataformas internas"]}
            />
            <ArchitectureCard
              icon={<BrainCircuit className="w-10 h-10" />}
              title="Agentes de IA operativos"
              desc="Implementamos sistemas inteligentes capaces de ejecutar tareas administrativas y de comunicación."
              examples={["Agentes de atención", "Clasificación de correos", "Asistentes operativos"]}
            />
            <ArchitectureCard
              icon={<Layers className="w-10 h-10" />}
              title="Automatización comercial"
              desc="Infraestructura para captación, seguimiento y gestión de leads."
              examples={["Automatización B2B", "Scoring de leads", "Outreach inteligente"]}
            />
          </div>
        </div>
      </section>

      {/* 4. CÓMO TRABAJAMOS - Corporate Process */}
      <section className="py-48 container mx-auto px-6 max-w-[1240px]">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition as any}
          className="text-center mb-32"
        >
          <h2 className="text-title text-4xl md:text-7xl mb-6">Ingeniería de ciclo completo</h2>
          <p className="text-white/30 text-xl font-light">Un método riguroso para resultados predecibles.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="absolute top-[28px] left-[10%] w-[80%] h-px bg-white/5 hidden md:block" />
          <CorporateStep num="01" title="Diagnóstico" desc="Análisis técnico de flujos y detección de cuellos de botella." />
          <CorporateStep num="02" title="Arquitectura" desc="Diseño de la infraestructura y selección del stack óptimo." />
          <CorporateStep num="03" title="Implementación" desc="Despliegue de sistemas sin interrupción operativa." />
          <CorporateStep num="04" title="Optimización" desc="Refinamiento basado en métricas de rendimiento real." />
        </div>
      </section>

      {/* 5. CASOS - Authority Focus */}
      <section className="py-48 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition as any}
            >
              <h2 className="text-title text-4xl md:text-7xl mb-6 text-white text-center md:text-left">Soluciones escalables</h2>
              <p className="text-white/30 text-xl font-light italic">Implementado y operando en entornos reales.</p>
            </motion.div>
            <Link href="/cases" className="text-primary-blue font-bold flex items-center gap-3 group text-[10px] uppercase tracking-[0.2em]">
              Ver ingeniería de casos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <SimpleCase title="Triage de comunicaciones" desc="Gestión inteligente y clasificación de alto volumen de entrada de datos." />
            <SimpleCase title="Automatización B2B" desc="Infraestructura de prospección y seguimiento automatizado." />
            <SimpleCase title="Sincronización SaaS" desc="Integración bidireccional entre ERP y sistemas propietarios." />
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL - Non-aggressive */}
      <section id="auditoria" className="py-48 container mx-auto px-6 max-w-[1240px]">
        <div className="glass-card rounded-[56px] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-20 border-white/[0.08] shadow-2xl">
          <div className="flex-1 relative z-10">
            <h2 className="text-title text-5xl md:text-7xl mb-12 tracking-tight">Evaluación <br /><span className="text-primary-blue">Estratégica</span></h2>
            <p className="text-white/40 text-xl md:text-2xl mb-14 font-light leading-relaxed">
              Iniciamos con una sesión de diagnóstico para mapear la infraestructura actual y detectar oportunidades de automatización estructural.
            </p>

            <ul className="space-y-6 mb-12 text-left">
              {[
                "Mapa de procesos críticos",
                "Evaluación de stack tecnológico",
                "Hoja de ruta de implementación"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-5 text-white/50">
                  <div className="w-2 h-2 rounded-full bg-primary-blue" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/20 text-xs italic font-light">
              * Nota: Mantenemos un alto estándar de confidencialidad bajo NDA previo a cualquier análisis.
            </p>
          </div>

          <div className="flex-1 relative z-10 glass-card p-10 md:p-14 border-white/10 rounded-[40px]">
            <div className="mb-12 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">Solicitar Auditoría</h3>
              <p className="text-white/30 text-base font-light italic">Breve cualificación previa.</p>
            </div>
            <ContactForm onSuccess={() => setShowCalendly(true)} />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProblemIcon({ icon, text }: any) {
  return (
    <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/[0.05] flex flex-col gap-6 group hover:border-primary-blue/30 transition-all duration-700">
      <div className="text-primary-blue/40 group-hover:text-primary-blue transition-colors">{icon}</div>
      <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">{text}</span>
    </div>
  );
}

function ArchitectureCard({ icon, title, desc, examples }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-12 rounded-[48px] bg-white/[0.01] border border-white/[0.05] group hover:border-primary-blue/30 transition-all duration-700"
    >
      <div className="text-primary-blue mb-10 group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">{title}</h3>
      <p className="text-white/40 leading-relaxed text-lg font-light mb-10">{desc}</p>
      <div className="flex flex-wrap gap-3">
        {examples.map((ex: string, i: number) => (
          <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] text-white/30 uppercase tracking-widest font-bold group-hover:border-primary-blue/10 transition-colors">
            {ex}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CorporateStep({ num, title, desc }: any) {
  return (
    <motion.div variants={fadeInUp} className="relative z-10 group">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue font-bold mb-10 group-hover:bg-primary-blue group-hover:text-white transition-all duration-700">
        {num}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider text-xs">{title}</h3>
      <p className="text-white/30 leading-relaxed text-base font-light">{desc}</p>
    </motion.div>
  );
}

function SimpleCase({ title, desc }: any) {
  return (
    <div className="p-12 rounded-[40px] glass-card border-white/[0.05] hover:bg-white/[0.03] transition-all group">
      <h3 className="text-xl font-bold mb-6 text-white group-hover:text-primary-blue transition-colors uppercase tracking-widest text-xs">{title}</h3>
      <p className="text-white/30 leading-relaxed font-light text-base">{desc}</p>
    </div>
  );
}
