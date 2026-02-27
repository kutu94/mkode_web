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
  TrendingDown,
  Coins,
  ShieldAlert,
  Target,
  BarChart3,
  Calendar
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
  const [showCalendly, setShowCalendly] = useState(false);

  if (showCalendly) {
    return (
      <div className="min-h-screen bg-grid-refined pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-[1240px] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 md:p-20 rounded-[48px] border-primary-blue/20"
          >
            <h1 className="text-title text-5xl md:text-7xl mb-6">Paso 2: Agenda tu diagnóstico estratégico</h1>
            <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto font-light">
              Hemos recibido tu información. En la sesión revisaremos tu estimación de fuga económica y validaremos si existe retorno real en tu caso.
            </p>

            <div className="bg-primary-blue/10 border border-primary-blue/20 p-6 rounded-2xl mb-12 max-w-xl mx-auto text-left flex gap-4">
              <ShieldCheck className="w-6 h-6 text-primary-blue shrink-0" />
              <p className="text-sm text-white/60">
                Solo agendamos sesiones con empresas donde vemos potencial real de recuperación de margen.
                <strong> Si reservas, asegúrate de asistir.</strong>
              </p>
            </div>

            <div className="w-full h-[700px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <iframe
                src="https://calendly.com/mkode-pro/30min?embed_domain=mkode.es&embed_type=Inline"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>

            <p className="mt-12 text-white/20 text-xs uppercase tracking-[0.2em] font-bold">
              La sesión dura 30 minutos. Revisaremos cifras reales, no teoría.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-grid-refined min-h-screen">
      {/* 1. HERO - Focused on Economic Impact */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-radial-hero border-b border-white/[0.04]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/60 text-[10px] uppercase tracking-[0.2em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-pulse" />
            Ingeniería de Recuperación de Margen
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
            className="text-title text-5xl md:text-[5.5rem] mb-10 max-w-6xl mx-auto leading-[0.9] tracking-tighter"
          >
            Cada semana sin automatización estás <span className="text-primary-blue">perdiendo margen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-3xl text-white/40 mb-16 max-w-4xl mx-auto leading-tight font-light text-balance"
          >
            Detectamos y recuperamos fugas económicas estructurales en 14 días. Solo si el retorno es medible y directo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link href="/contact" className="btn-primary text-center px-12 py-5 text-sm">
                Calcular mi fuga de margen
              </Link>
              <Link href="/cases" className="btn-secondary text-center px-12 py-5 text-sm">
                Impacto en cifras reales
              </Link>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold flex items-center gap-2">
              <ShieldCheck className="w-3 h-3" /> Solo 3 implementaciones disponibles este mes
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CÓMO RECUPERAMOS MARGEN EN 14 DÍAS - Merged Section */}
      <section className="py-48 container mx-auto px-6 max-w-[1240px]">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition as any}
          className="max-w-4xl mb-32"
        >
          <h2 className="text-title text-4xl md:text-7xl mb-10 tracking-tighter text-white">Cómo recuperamos margen en 14 días</h2>
          <p className="text-white/40 text-xl font-light max-w-2xl leading-relaxed">
            Eliminamos la ineficiencia estructural mediante ingeniería de procesos aplicada, con foco exclusivo en el retorno de inversión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProcessCard
            num="01"
            title="Diagnóstico económico"
            desc="Cuantificamos las horas manuales y el capital quemado en procesos repetitivos. Sin datos, no hay proyecto."
            icon={<BarChart3 className="w-10 h-10 text-primary-blue opacity-40 group-hover:opacity-100 transition-opacity" />}
          />
          <ProcessCard
            num="02"
            title="Arquitectura de recuperación"
            desc="Sistemas e IA diseñados para sustituir la carga administrativa manual por ejecución técnica inmediata."
            icon={<Workflow className="w-10 h-10 text-primary-blue opacity-40 group-hover:opacity-100 transition-opacity" />}
          />
          <ProcessCard
            num="03"
            title="Validación con métricas"
            desc="Medición del impacto financiero en producción. Garantizamos que el sistema genera más margen del que costó."
            icon={<Target className="w-10 h-10 text-primary-blue opacity-40 group-hover:opacity-100 transition-opacity" />}
          />
        </div>
      </section>

      {/* 3. CASOS - Financial Focus */}
      <section className="py-48 bg-white/[0.01] border-y border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={fadeInUp.transition as any}
            >
              <h2 className="text-title text-4xl md:text-7xl mb-6 text-white">Impacto financiero exacto</h2>
              <p className="text-white/30 text-xl font-light italic">Resultados medidos en euros, no en funciones.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <FinancialCase
              title="Triage de Gestión"
              before="4h/día perdidas en clasificación manual."
              after="+15.000€"
              afterLabel="Ahorro est. anual"
            />
            <FinancialCase
              title="Capture & Outreach"
              before="Dependencia de prospección manual lenta."
              after="+40.000€"
              afterLabel="Pipeline trimestral"
            />
            <FinancialCase
              title="Data Mapping Core"
              before="5% de margen perdido por errores administrativos."
              after="MARGEN 100%"
              afterLabel="Precisión recuperada"
            />
          </div>
        </div>
      </section>

      {/* 4. INVERSIÓN ESTRATÉGICA */}
      <section className="py-48 container mx-auto px-6 max-w-[1240px] text-center">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition as any}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="space-y-6">
            <h2 className="text-title text-4xl md:text-7xl text-white">Inversión proporcional al margen recuperado</h2>
            <p className="text-white/30 text-xl font-light">ROI estimado en fase de diagnóstico inicial.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <InversionPoint
              title="Sin proyectos sin retorno"
              desc="No ejecutamos ninguna arquitectura si no detectamos un ROI claro en 2-4 meses."
            />
            <InversionPoint
              title="Diagnóstico Estratégico"
              desc="Sesión técnica para auditar procesos y cuantificar la fuga económica actual."
            />
            <InversionPoint
              title="Ingeniería Aplicada"
              desc="Sistemas robustos desplegados en 14 días. Foco en estabilidad y margen."
            />
          </div>

          <div className="pt-12">
            <Link href="/contact" className="btn-primary text-xl px-16 py-6 inline-flex items-center gap-4">
              Solicitar Auditoría de ROI <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 5. AUDITORÍA COMO FILTRO ESTRATÉGICO */}
      <section id="auditoria" className="py-48 bg-white/[0.01] border-t border-white/[0.04]">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="glass-card rounded-[56px] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-20 border-white/[0.1] shadow-2xl">
            <div className="flex-1 relative z-10">
              <h2 className="text-title text-5xl md:text-8xl mb-12 tracking-tight">Acceso Limitado <br /><span className="text-primary-blue">Diagnóstico ROI</span></h2>
              <p className="text-white/40 text-xl md:text-2xl mb-14 font-light leading-relaxed">
                Solo trabajamos con un número reducido de implementaciones al mes para garantizar la calidad y el plazo de 14 días.
              </p>

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
              </ul>

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-sm text-white/20 italic font-light">
                * Revisaremos cifras reales, no teoría. Si no detectamos retorno claro, no recomendaremos la implementación.
              </div>
            </div>

            <div className="flex-1 relative z-10 glass-card p-10 md:p-14 border-white/10 rounded-[40px]">
              <div className="mb-12 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">Paso 1: Cualificación</h3>
                <p className="text-white/30 text-base font-light font-light italic">Información tratada bajo estricto NDA.</p>
              </div>
              <ContactForm onComplete={() => setShowCalendly(true)} />
            </div>

            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary-blue/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessCard({ num, title, desc, icon }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-12 rounded-[40px] bg-white/[0.01] border border-white/[0.05] group hover:border-primary-blue/30 transition-all duration-700"
    >
      <div className="flex justify-between items-start mb-12">
        <div className="text-primary-blue/20 font-bold text-6xl tracking-tighter group-hover:text-primary-blue/60 transition-colors uppercase italic">{num}</div>
        <div className="mt-2">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-6 tracking-tight text-white uppercase tracking-wider text-sm">{title}</h3>
      <p className="text-white/40 leading-relaxed text-base font-light">{desc}</p>
    </motion.div>
  );
}

function FinancialCase({ title, before, after, afterLabel }: any) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card p-12 rounded-[48px] hover:bg-white/[0.03] transition-all border-white/[0.06] group shadow-xl"
    >
      <h4 className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-bold mb-10">{title}</h4>
      <div className="space-y-12">
        <div>
          <div className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4 font-bold italic">ANTES</div>
          <div className="text-white/40 leading-relaxed font-light">{before}</div>
        </div>
        <div className="pt-10 border-t border-white/5">
          <div className="text-[10px] text-primary-blue uppercase tracking-[0.2em] mb-4 font-bold italic">DESPUÉS (Impacto)</div>
          <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter text-title">{after}</div>
          <div className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/20 font-light">{afterLabel}</div>
        </div>
      </div>
    </motion.div>
  );
}

function InversionPoint({ title, desc }: any) {
  return (
    <div className="space-y-6 group">
      <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-primary-blue/40 group-hover:text-primary-blue group-hover:bg-primary-blue/10 transition-all duration-500">
        <div className="w-2 h-2 rounded-full bg-current" />
      </div>
      <h3 className="text-lg font-bold text-white tracking-tight uppercase tracking-wider text-xs">{title}</h3>
      <p className="text-white/30 leading-relaxed font-light text-base">{desc}</p>
    </div>
  );
}

function ContactForm({ onComplete }: { onComplete: () => void }) {
  const [loading, setLoading] = useState(false);

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
      onComplete();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Nombre completo</label>
        <input required name="name" placeholder="Ej: Dirección de Operaciones" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all" />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Email corporativo</label>
        <input required name="email" type="email" placeholder="email@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all" />
        <p className="text-[9px] text-white/20 ml-2 italic">Trabajamos únicamente con emails corporativos.</p>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Empresa</label>
        <input required name="company" placeholder="Nombre legal o comercial" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all" />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Facturación anual aproximada</label>
        <select required name="revenue_range" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none text-white/50 cursor-pointer">
          <option value="">Seleccionar rango</option>
          <option value="0-500k">0 – 500k€</option>
          <option value="500k-1M">500k€ – 1M€</option>
          <option value="1M-5M">1M€ – 5M€</option>
          <option value="5M-20M">5M€ – 20M€</option>
          <option value="+20M">+20M€</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Horas semanales en tareas manuales</label>
        <select required name="hours_manual" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none text-white/50 cursor-pointer">
          <option value="">Seleccionar estimación</option>
          <option value="<10h">&lt;10h</option>
          <option value="10-30h">10 – 30h</option>
          <option value="30-80h">30 – 80h</option>
          <option value="+80h">+80h</option>
          <option value="unknown">No lo tengo cuantificado</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Principal cuello de botella operativo</label>
        <select required name="pain" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none text-white/50 cursor-pointer">
          <option value="">Seleccionar problema</option>
          <option value="data-entry">Doble entrada de datos / errores</option>
          <option value="repetitive">Procesos manuales repetitivos</option>
          <option value="integrations">Falta de integración de sistemas</option>
          <option value="pipeline">Prospección / generación de pipeline</option>
          <option value="support">Atención al cliente lenta</option>
          <option value="reporting">Reporting y facturación</option>
          <option value="other">Otro</option>
        </select>
      </div>

      <button
        disabled={loading}
        type="submit"
        className={cn(
          "w-full py-5 rounded-2xl btn-primary text-white mt-10 text-xs uppercase tracking-widest",
          loading && "opacity-50 cursor-wait"
        )}
      >
        {loading ? "Procesando data..." : "Confirmar e ir al paso 2"}
      </button>
    </form>
  );
}
