"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Settings,
  Zap,
  BrainCircuit,
  Plus,
  Minus,
  MessageSquare,
  Search,
  Workflow,
  ShieldCheck,
  LineChart,
  Clock,
  Briefcase,
  TrendingDown,
  Coins,
  ShieldAlert,
  Target
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
  return (
    <div className="flex flex-col bg-grid-refined min-h-screen">
      {/* 1. HERO - Apple/Linear Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-radial-hero border-b border-white/[0.04]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-pulse" />
            Ingeniería de Recuperación Económica
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
            className="text-title text-5xl md:text-8xl mb-8 max-w-5xl mx-auto leading-[0.95]"
          >
            Si tu equipo mueve datos manualmente, estás <span className="text-primary-blue">perdiendo margen</span> cada semana.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/40 mb-14 max-w-3xl mx-auto leading-relaxed font-light text-balance"
          >
            Cada semana que tu equipo trabaja manualmente, tu margen se reduce. Nosotros lo recuperamos en 14 días. Sin teoría, solo ingeniería aplicada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16 text-left"
          >
            <HeroBullet icon={<Coins className="w-5 h-5" />} text="Empresas similares recuperan entre 1.500€ y 6.000€ mensuales." />
            <HeroBullet icon={<TrendingDown className="w-5 h-5" />} text="Reducción del 60–80% en tiempo administrativo." />
            <HeroBullet icon={<Target className="w-5 h-5" />} text="ROI estimado en 2–4 meses." />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary text-center">
                Calcular cuánto estoy perdiendo
              </Link>
              <Link href="/cases" className="btn-secondary text-center">
                Ver casos con impacto medido
              </Link>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold flex items-center gap-2">
              <ShieldCheck className="w-3 h-3" /> Implementaciones limitadas para garantizar ROI real
            </p>
          </motion.div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-deep-black to-transparent" />
      </section>

      {/* 2. INEFICIENCIAS */}
      <section className="py-40 container mx-auto px-6 max-w-[1240px]">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition as any}
          className="max-w-4xl mb-24"
        >
          <h2 className="text-title text-4xl md:text-6xl mb-8 tracking-tighter">Ineficiencias que te están costando dinero ahora mismo</h2>

          <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/[0.05] mb-12 max-w-2xl text-left backdrop-blur-sm shadow-2xl">
            <p className="text-white font-medium mb-4 flex items-center gap-2">
              <LineChart className="w-4 h-4 text-primary-blue" /> Ejemplo de impacto real:
            </p>
            <p className="text-white/40 text-base leading-relaxed">
              Si 2 personas dedican 2 horas al día a tareas repetitivas: <br />
              <span className="text-white/80 font-semibold text-lg block mt-2">80 horas al mes desperdiciadas.</span>
              <span className="text-primary-blue font-bold text-2xl mt-1 block">~2.000€–3.000€ mensuales</span>
              <span className="text-white/20 text-xs mt-2 block uppercase tracking-widest italic">Coste improductivo directo</span>
            </p>
          </div>

          <p className="text-primary-blue font-bold text-2xl mb-6 tracking-tight">Mientras lees esto, tu empresa sigue perdiendo margen operativo.</p>
          <p className="text-white/30 text-xl font-light">No es un problema técnico, es una fuga de capital constante.</p>
        </motion.div>

        <motion.div
          initial={staggerContainer.initial}
          whileInView={staggerContainer.whileInView}
          viewport={staggerContainer.viewport}
          transition={staggerContainer.transition}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <PainCard icon={<ShieldAlert className="w-6 h-6" />} title="Capital quemado en procesos manuales" />
          <PainCard icon={<TrendingDown className="w-6 h-6" />} title="Fuga de ingresos por Leads sin respuesta" />
          <PainCard icon={<Workflow className="w-6 h-6 rotate-90" />} title="Desconexión de sistemas (Coste por error)" />
          <PainCard icon={<Clock className="w-6 h-6" />} title="Administración inflada e improductiva" />
          <PainCard icon={<TrendingDown className="w-6 h-6" />} title="Retrasos en facturación y reporting" />
        </motion.div>
      </section>

      {/* 3. SISTEMAS */}
      <section id="sistemas" className="py-40 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition as any}
            className="mb-24"
          >
            <h2 className="text-title text-4xl md:text-6xl mb-6">Qué construimos</h2>
            <p className="text-white/30 text-xl font-light">Infraestructura técnica para recuperar tu capacidad operativa.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <SystemCard
              icon={<Settings className="w-12 h-12" />}
              title="Automatización de procesos"
              desc="Sistemas integrales que gestionan el flujo de trabajo sin intervención humana. El margen se queda en tu empresa, no en horas de clics."
            />
            <SystemCard
              icon={<Zap className="w-12 h-12" />}
              title="Integraciones y APIs"
              desc="Eliminamos la doble entrada de datos y los errores de sincronización que generan fricción operativa y pérdidas financieras."
            />
            <SystemCard
              icon={<BrainCircuit className="w-12 h-12" />}
              title="Agentes IA operativos"
              desc="Implementación de lógica de decisión automatizada. Reducimos el tiempo de respuesta de horas a milisegundos."
            />
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS */}
      <section className="py-24 container mx-auto px-6 max-w-[1240px]">
        <div className="glass-card rounded-[40px] p-16 overflow-hidden border-white/[0.08] shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-50" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:divide-x divide-white/10 relative z-10">
            <StatCard value="1.500€+" label="recuperados/mes" sub="perfil START típico" />
            <StatCard value="2-4 meses" label="ROI Promedio" sub="retorno de inversión" />
            <StatCard value="100%" label="precisión incremental" sub="eliminación del error humano" />
          </div>
        </div>
      </section>

      {/* 5. CASOS */}
      <section className="py-40 container mx-auto px-6 max-w-[1240px]">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition as any}
          >
            <h2 className="text-title text-4xl md:text-6xl mb-6">Casos con impacto medido</h2>
            <p className="text-white/30 text-xl font-light italic">Implementado sin aumentar equipo.</p>
          </motion.div>
          <Link href="/cases" className="text-primary-blue font-bold flex items-center gap-3 group text-xs uppercase tracking-[0.2em] transition-all hover:gap-4">
            Explorar impacto total <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <CaseCard
            title="Triage y clasificación de correos"
            context="Impacto: 2-4h administrativas recuperadas/día"
            problem="Pérdida de margen en personal realizando tareas de filtrado manual."
            system="IA Triage con GPT-4 + Integración Outlook/Gmail + Webhooks hacia ERP."
            result="Ahorro est. anual: 15.000€"
          />
          <CaseCard
            title="Agente conversacional de atención"
            context="Impacto: Incremento del 300% en reuniones"
            problem="Pérdida de oportunidades fuera del horario comercial por falta de respuesta."
            system="Agente RAG + WhatsApp / Web Chat + Agendamiento automático."
            result="Impacto Pipeline: +40.000€ trimestrales"
          />
          <CaseCard
            title="Lead finder + Outreach"
            context="Impacto: 10x volumen de prospección"
            problem="Crecimiento estancado por dependencia de procesos de búsqueda manuales."
            system="Smart Scraper + Enriquecimiento de datos + Secuencias personalizadas por IA."
            result="Coste por lead reducido en un 75%"
          />
        </div>
      </section>

      {/* 6. PROCESO */}
      <section className="py-40 container mx-auto px-6 max-w-[1240px]">
        <motion.h2
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition as any}
          className="text-title text-4xl md:text-6xl mb-32 text-center"
        >Recuperación en 14 días</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative">
          <div className="absolute top-[28px] left-[10%] w-[80%] h-px bg-white/5 hidden md:block" />

          <ProcessStep
            num="01"
            title="Diagnóstico"
            desc="Cuantificamos exactamente cuánto dinero estás perdiendo hoy y diseñamos la solución de mayor impacto."
          />
          <ProcessStep
            num="02"
            title="Construcción"
            desc="Despliegue de infraestructura técnica e integración con tu stack actual sin interrumpir tu operativa."
          />
          <ProcessStep
            num="03"
            title="Optimización"
            desc="Validamos el impacto en producción con métricas económicas reales y garantizamos el retorno."
          />
        </div>
      </section>

      {/* 7. INVERSIÓN (Pricing) */}
      <section className="py-40 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="text-center mb-28">
            <h2 className="text-title text-4xl md:text-6xl mb-6">Inversión en eficiencia operativa</h2>
            <p className="text-white/30 text-xl font-light">No vendemos software, recuperamos tu capacidad de margen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <PricingCard
              name="PROYECTO CORE"
              price="Inversión desde 3.000€"
              sub="Equivalente a ~1 mes de margen perdido en tareas manuales"
              features={["Ideal si pierdes 1.5k€–3k€/mes", "1 Sistema Core de impacto", "Sincronización de datos", "ROI est. 2–4 meses", "Implementación 14 días"]}
            />
            <PricingCard
              name="PROYECTO SCALE"
              price="Inversión desde 6.000€"
              sub="Ecosistema de Sistemas de alta eficiencia"
              featured
              features={["Ecosistema multi-sistema", "ROI est. 1–3 meses", "Recuperación est. antes del 2º T", "Dashboards financieros", "Soporte prioritario"]}
            />
            <PricingCard
              name="ARQUITECTURA ENTERPRISE"
              price="Inversión a medida"
              sub="Para estructuras donde una semana de ineficiencia puede costar miles"
              features={["Impacto en gran volumen", "ROI est. <2 meses", "Seguridad Bancaria / SLA", "Mantenimiento Proactivo", "Soporte dedicado"]}
            />
          </div>

          <div className="text-center">
            <p className="text-white/20 text-xs mb-10 max-w-2xl mx-auto italic font-light">
              Nuestro compromiso es el retorno. Si no vemos un ROI claro en la fase de diagnóstico, no recomendaremos la inversión.
            </p>
            <Link href="/contact" className="btn-secondary">
              Calcular mi plan personalizado
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-40 container mx-auto px-6 max-w-[900px]">
        <h2 className="text-title text-4xl md:text-5xl mb-24 text-center">Preguntas frecuentes</h2>
        <div className="space-y-6">
          <FaqItem q="¿Es una inversión rentable para mi empresa?" a="La rentabilidad se mide en las horas que tu equipo deja de desperdiciar. Si esas horas recapturadas suman más que la inversión inicial en menos de 6 meses, el sistema es una decisión financiera correcta." />
          <FaqItem q="¿Qué pasa si no veo ROI claro?" a="No implementamos sistemas si el retorno económico no es medible y positivo. El diagnóstico inicial actúa como filtro para proteger tu inversión." />
          <FaqItem q="¿Cuánto tiempo de mi equipo consumirá la implementación?" a="Menos de 2 horas en total. Del resto del diseño, arquitectura y despliegue técnico nos encargamos nosotros." />
          <FaqItem q="¿Es seguro conectar mis datos?" a="Absolutamente. Trabajamos bajo protocolos de cifrado industrial y podemos desplegar soluciones en infraestructuras privadas locales si es necesario." />
          <FaqItem q="¿Qué ROI medio tienen vuestros proyectos?" a="El ROI promedio es de 3 meses. Recuperamos la inversión inicial eliminando los salarios ocultos en tareas repetitivas." />
          <FaqItem q="¿Firmáis garantías de confidencialidad?" a="Firmamos un NDA estricto con todos nuestros clientes antes de cualquier análisis técnico u operativo." />
        </div>
      </section>

      {/* 9. FINAL CTA (Audit) */}
      <section id="auditoria" className="py-40 container mx-auto px-6 max-w-[1240px]">
        <div className="glass-card rounded-[48px] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-20 border-white/[0.1] shadow-[0_0_100px_-30px_rgba(10,65,144,0.1)]">
          <div className="flex-1 relative z-10">
            <h2 className="text-title text-5xl md:text-7xl mb-10"><span className="text-white/30">Auditoría estratégica</span> <br />gratuita <span className="text-primary-blue text-lg align-top uppercase tracking-widest font-bold ml-2">(Limitada)</span></h2>
            <p className="text-white/40 text-xl md:text-2xl mb-14 font-light leading-relaxed">
              En 30 minutos identificamos cuánto margen estás perdiendo mensualmente y qué sistema tendría mayor impacto ahora.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 mb-14 text-xs text-white/30 italic font-light">
              Nota: Solo aceptamos un número reducido de implementaciones al mes para garantizar la calidad y el plazo de 14 días.
            </div>

            <ul className="space-y-8 mb-12 text-left">
              <li className="flex items-center gap-5 text-white/60">
                <div className="w-8 h-8 rounded-xl bg-primary-blue/10 flex items-center justify-center shrink-0 border border-primary-blue/20">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                </div>
                <span className="text-lg">Mapa de ineficiencias monetizadas</span>
              </li>
              <li className="flex items-center gap-5 text-white/60">
                <div className="w-8 h-8 rounded-xl bg-primary-blue/10 flex items-center justify-center shrink-0 border border-primary-blue/20">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                </div>
                <span className="text-lg">Cálculo de retorno de inversión (ROI)</span>
              </li>
              <li className="flex items-center gap-5 text-white/60">
                <div className="w-8 h-8 rounded-xl bg-primary-blue/10 flex items-center justify-center shrink-0 border border-primary-blue/20">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                </div>
                <span className="text-lg">Hoja de ruta de implementación inmediata</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 relative z-10 glass-card p-10 md:p-14 border-white/10 rounded-[40px]">
            <div className="mb-10 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">Recuperar margen ahora</h3>
              <p className="text-white/30 text-sm">Si no detectamos retorno claro, no recomendamos implementar nada.</p>
            </div>
            <ContactForm />
          </div>

          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-blue/10 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* 10. PRE-FOOTER */}
      <section className="container mx-auto px-6 max-w-[1240px] text-center mb-40 mt-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="text-3xl font-bold text-white text-title tracking-tight">No vendemos automatización. Vendemos margen operativo.</h3>
          <p className="text-white/20 text-base italic font-light">
            Si en la auditoría no vemos un retorno económico claro para tu empresa, no recomendaremos implementar ningún sistema.
          </p>
        </div>
      </section>
    </div>
  );
}

function HeroBullet({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-[24px] bg-white/[0.01] border border-white/5 backdrop-blur-sm transition-all hover:bg-white/[0.03] hover:border-white/10">
      <div className="text-primary-blue shrink-0 mt-1">{icon}</div>
      <p className="text-white/60 text-sm md:text-base leading-snug font-light">{text}</p>
    </div>
  );
}

function PainCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition as any}
      className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.05] flex items-center gap-6 group hover:border-primary-blue/30 transition-all duration-500"
    >
      <div className="text-primary-blue/40 group-hover:text-primary-blue group-hover:scale-110 transition-all duration-500">{icon}</div>
      <span className="text-base font-medium text-white/60 group-hover:text-white/90 transition-colors uppercase tracking-widest text-xs">{title}</span>
    </motion.div>
  );
}

function SystemCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition as any}
      className="glass-card p-12 rounded-[40px] group border-white/[0.05]"
    >
      <div className="text-primary-blue mb-10 group-hover:scale-110 transition-transform origin-left duration-700 opacity-60 group-hover:opacity-100">{icon}</div>
      <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">{title}</h3>
      <p className="text-white/30 leading-relaxed text-base font-light">{desc}</p>
    </motion.div>
  );
}

function StatCard({ value, label, sub }: { value: string, label: string, sub: string }) {
  return (
    <div className="p-8 text-center flex flex-col gap-3">
      <div className="text-6xl font-bold text-white tracking-tighter">{value}</div>
      <div className="text-primary-blue font-bold uppercase tracking-[0.3em] text-[10px]">{label}</div>
      <div className="text-white/20 text-[10px] italic font-light tracking-widest uppercase">{sub}</div>
    </div>
  );
}

function CaseCard({ title, context, problem, system, result }: any) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition as any}
      className="glass-card p-12 rounded-[40px] flex flex-col hover:bg-white/[0.03] transition-all border-white/[0.06] group shadow-xl"
    >
      <div className="mb-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-blue mb-3 italic">{context}</div>
        <h4 className="text-3xl font-bold text-white tracking-tight">{title}</h4>
      </div>
      <div className="space-y-10 flex-grow mt-12">
        <div>
          <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4 font-bold italic">Fuga Operativa</div>
          <div className="text-base text-white/40 leading-relaxed font-light">{problem}</div>
        </div>
        <div>
          <div className="text-[10px] text-primary-blue/40 uppercase tracking-[0.2em] mb-4 font-bold italic">Sistema de Recuperación</div>
          <div className="text-base text-white/40 leading-relaxed font-light">{system}</div>
        </div>
      </div>
      <div className="mt-14 pt-10 border-t border-white/5 flex flex-col gap-6 text-left">
        <div>
          <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-2 font-bold italic">Impacto Medido</div>
          <div className="text-2xl font-bold text-white">{result}</div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-primary-blue font-bold opacity-60 group-hover:opacity-100 transition-opacity">
          Implementado sin aumentar equipo.
        </div>
      </div>
    </motion.div>
  );
}

function ProcessStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition as any}
      className="relative z-10 md:px-12 pb-16 md:pb-0 group"
    >
      <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary-blue font-bold mb-10 group-hover:bg-primary-blue group-hover:text-white transition-all duration-700 shadow-xl border-white/10 group-hover:scale-110">
        {num}
      </div>
      <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">{title}</h3>
      <p className="text-white/30 leading-relaxed text-base font-light">{desc}</p>
    </motion.div>
  );
}

function PricingCard({ name, price, sub, features, featured }: any) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition as any}
      className={cn(
        "p-14 rounded-[48px] flex flex-col transition-all relative group",
        featured
          ? "bg-white/[0.02] border border-primary-blue/40 lg:scale-[1.05] z-10 shadow-[0_0_80px_-20px_rgba(10,65,144,0.15)]"
          : "glass-card"
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-blue px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">
          Más solicitado
        </div>
      )}
      <div className="text-[10px] font-bold mb-6 text-white/30 uppercase tracking-[0.3em]">{name}</div>
      <div className="text-3xl lg:text-4xl font-bold mb-2 tracking-tighter text-white">{price}</div>
      <div className="text-[11px] text-white/30 uppercase tracking-[0.15em] mb-12 leading-relaxed min-h-[3rem] font-light">{sub}</div>
      <ul className="space-y-6 mb-16 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-4 text-white/50 text-sm text-left font-light">
            <CheckCircle2 className="w-4 h-4 text-primary-blue mt-1 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={cn(
        "w-full py-5 rounded-2xl text-center font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500",
        featured ? "btn-primary" : "bg-white/5 text-white hover:bg-white/10 border border-white/5 hover:border-white/20"
      )}>
        Seleccionar
      </Link>
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[24px] overflow-hidden glass-card transition-all border-white/[0.05]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-all"
      >
        <span className="font-bold text-base md:text-xl pr-6 text-white/80">{q}</span>
        <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-500", open && "rotate-180 bg-primary-blue/20")}>
          {open ? <Minus className="w-4 h-4 text-primary-blue" /> : <Plus className="w-4 h-4 text-white/20" />}
        </div>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 pb-8 text-white/40 text-lg leading-relaxed border-t border-white/[0.05] pt-6 font-light"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setSuccess(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (success) return (
    <div className="h-full flex flex-col items-center justify-center text-center py-20">
      <div className="w-20 h-20 rounded-full bg-primary-blue/20 flex items-center justify-center mb-8 shadow-2xl">
        <CheckCircle2 className="w-10 h-10 text-primary-blue" />
      </div>
      <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Solicitud enviada</h3>
      <p className="text-white/40 text-lg font-light">Nos pondremos en contacto contigo en menos de 24 horas laborables.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required name="name" placeholder="Nombre completo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all" />
        <input required name="email" type="email" placeholder="Email corporativo" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input required name="company" placeholder="Empresa" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all" />
        <select required name="revenue_range" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all appearance-none text-white/50">
          <option value="">Rango de facturación</option>
          <option value="<100k">Menos de 100k€</option>
          <option value="100k-500k">100k€ - 500k€</option>
          <option value="500k-2M">500k€ - 2M€</option>
          <option value=">2M">Más de 2M€</option>
        </select>
      </div>
      <input required name="hours_manual" placeholder="¿Cuántas horas semanales dedica el equipo a tareas manuales?" className="w-full bg-white/5 border border-primary-blue/40 rounded-xl px-4 py-3 text-sm border-primary-blue/40 focus:border-primary-blue outline-none transition-all text-white font-light shadow-inner" />
      <input required name="pain" placeholder="¿Cuál es el principal cuello de botella hoy?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all" />
      <textarea name="message" rows={2} placeholder="Comentarios adicionales" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all resize-none text-white font-light"></textarea>

      <button
        disabled={loading}
        className="w-full py-5 rounded-2xl btn-primary text-white mt-4"
      >
        {loading ? "Procesando..." : "Confirmar Auditoría"}
      </button>
    </form>
  );
}
