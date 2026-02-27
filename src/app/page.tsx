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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full border border-primary-blue/30 bg-primary-blue/10 text-primary-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest"
          >
            Sistemas de recuperación de margen operativo
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-8 max-w-5xl mx-auto leading-[1.05]"
          >
            Si tu equipo mueve datos manualmente, estás <span className="text-primary-blue">perdiendo margen</span> cada semana.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Cada semana que tu equipo trabaja manualmente, tu margen se reduce. Nosotros lo recuperamos en 14 días. Sin teoría, solo resultados en tu cuenta de resultados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 text-left"
          >
            <HeroBullet icon={<Coins className="w-5 h-5" />} text="Empresas similares recuperan entre 1.500€ y 6.000€ mensuales." />
            <HeroBullet icon={<TrendingDown className="w-5 h-5" />} text="Reducción del 60–80% en tiempo administrativo." />
            <HeroBullet icon={<Target className="w-5 h-5" />} text="ROI estimado en 2–4 meses." />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <Link href="/contact" className="w-full sm:w-auto px-10 py-4 rounded-2xl btn-gradient text-white font-bold text-sm uppercase tracking-widest transition-all soft-shadow">
              Calcular cuánto estoy perdiendo
            </Link>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
              Implementaciones limitadas cada mes para garantizar ROI real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INEFICIENCIAS */}
      <section className="container mx-auto px-6 max-w-[1240px]">
        <div className="glass-card rounded-[32px] p-12 md:p-20 relative overflow-hidden">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ineficiencias que te están costando dinero ahora mismo</h2>

            <div className="p-6 rounded-2xl bg-primary-blue/10 border border-primary-blue/20 mb-10 max-w-2xl text-left">
              <p className="text-white font-semibold mb-2">Ejemplo de impacto real:</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Si 2 personas dedican 2 horas al día a tareas repetitivas: <br />
                <span className="text-white font-bold">80 horas al mes desperdiciadas.</span> <br />
                <span className="text-primary-blue font-bold text-lg">~2.000€–3.000€ mensuales</span> en coste improductivo.
              </p>
            </div>

            <p className="text-primary-blue font-bold text-xl mb-4 italic">Mientras lees esto, tu empresa sigue perdiendo margen operativo.</p>
            <p className="text-white/40 text-lg">No es un problema técnico, es una fuga de capital constante que se puede detener hoy mismo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PainCard icon={<ShieldAlert className="w-5 h-5" />} title="Capital quemado en procesos manuales" />
            <PainCard icon={<TrendingDown className="w-5 h-5" />} title="Fuga de ingresos por Leads sin respuesta" />
            <PainCard icon={<Workflow className="w-5 h-5 rotate-90" />} title="Desconexión de sistemas (Coste por error)" />
            <PainCard icon={<Clock className="w-5 h-5" />} title="Administración inflada e improductiva" />
            <PainCard icon={<TrendingDown className="w-5 h-5" />} title="Retrasos en facturación y reporting" />
          </div>
        </div>
      </section>

      {/* 3. SISTEMAS */}
      <section id="sistemas" className="container mx-auto px-6 max-w-[1240px]">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Qué construimos</h2>
          <p className="text-white/40 text-lg">Infraestructura técnica para recuperar tu capacidad operativa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SystemCard
            icon={<Settings className="w-10 h-10" />}
            title="Automatización de procesos"
            desc="Sistemas integrales que gestionan el flujo de trabajo sin intervención humana. El margen se queda en tu empresa, no en horas de clics."
          />
          <SystemCard
            icon={<Zap className="w-10 h-10" />}
            title="Integraciones y APIs"
            desc="Eliminamos la doble entrada de datos y los errores de sincronización que generan fricción operativa y pérdidas financieras."
          />
          <SystemCard
            icon={<BrainCircuit className="w-10 h-10" />}
            title="Agentes IA operativos"
            desc="Implementación de lógica de decisión automatizada. Reducimos el tiempo de respuesta de horas a milisegundos."
          />
        </div>
      </section>

      {/* 4. RESULTADOS */}
      <section className="container mx-auto px-6 max-w-[1240px]">
        <div className="glass-card rounded-[32px] p-12 overflow-hidden border-primary-blue/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:divide-x divide-white/5">
            <StatCard value="1.500€+" label="recuperados/mes" sub="perfil START típico" />
            <StatCard value="2-4 meses" label="ROI Promedio" sub="retorno de inversión" />
            <StatCard value="80%" label="precisión incremental" sub="sin error humano" />
          </div>
        </div>
      </section>

      {/* 5. CASOS */}
      <section className="container mx-auto px-6 max-w-[1240px]">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Casos con impacto medido</h2>
            <p className="text-white/40 text-lg">Implementado sin aumentar equipo.</p>
          </div>
          <Link href="/cases" className="text-primary-blue font-bold flex items-center gap-2 group text-sm uppercase tracking-widest">
            Explorar impacto total <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CaseCard
            title="Triage y clasificación de correos"
            context="Impacto: 2-4h administrativas recuperadas/día"
            problem="Pérdida de margen en personal cualificado realizando tareas de filtrado manual de entrada."
            system="IA Triage con GPT-4 + Integración Outlook/Gmail + Webhooks hacia ERP."
            result="Ahorro est. anual: 15.000€"
          />
          <CaseCard
            title="Agente conversacional de atención"
            context="Impacto: Incremento del 300% en reuniones"
            problem="Pérdida de oportunidades comerciales fuera del horario comercial por falta de respuesta."
            system="Agente RAG + WhatsApp / Web Chat + Agendamiento automático."
            result="Impacto Pipeline: +40.000€ trimestrales"
          />
          <CaseCard
            title="Lead finder + Outreach"
            context="Impacto: 10x volumen de prospección"
            problem="Crecimiento estancado por dependencia de procesos de búsqueda de clientes manuales."
            system="Smart Scraper + Enriquecimiento de datos + Secuencias personalizadas por IA."
            result="Coste por lead reducido en un 75%"
          />
        </div>
      </section>

      {/* 6. PROCESO */}
      <section className="container mx-auto px-6 max-w-[1240px]">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 text-center tracking-tight">Recuperación en 14 días</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          <div className="absolute top-[23px] left-0 w-full h-px bg-white/5 hidden md:block" />

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
      <section className="container mx-auto px-6 max-w-[1240px]">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Inversión en eficiencia operativa</h2>
          <p className="text-white/40 text-lg">No vendemos software, vendemos la recuperación de tu margen operativo.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <PricingCard
            name="PROYECTO CORE"
            price="Inversión desde 3.000€"
            sub="Equivalente a ~1 mes de margen perdido en muchas operaciones"
            features={["Ideal si pierdes 1.5k€–3k€/mes", "1 Sistema Core de impacto", "Sincronización de datos", "ROI est. 2–4 meses", "Implementación 14 días"]}
          />
          <PricingCard
            name="PROYECTO SCALE"
            price="Inversión desde 6.000€"
            sub="Ecosistema de Sistemas"
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
          <p className="text-white/30 text-xs mb-8 max-w-2xl mx-auto italic">
            El foco está en el retorno. Si no vemos un ROI claro en el diagnóstico, no recomendaremos la implementación del sistema.
          </p>
          <Link href="/contact" className="inline-flex px-10 py-4 rounded-2xl glass-card text-white font-bold text-sm uppercase tracking-widest hover:border-primary-blue/40 transition-all">
            Calcular mi plan personalizado
          </Link>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="container mx-auto px-6 max-w-[800px]">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <FaqItem q="¿Es una inversión rentable para mi empresa?" a="La rentabilidad se mide en las horas que tu equipo deja de desperdiciar en tareas de bajo valor. Si esas horas recapturadas suman más que la inversión inicial en 6 meses, el sistema es obligatorio." />
          <FaqItem q="¿Qué pasa si no veo ROI claro?" a="No implementamos sistemas si el retorno económico no es medible. El diagnóstico es el filtro principal para garantizar que nuestra colaboración sea rentable." />
          <FaqItem q="¿Cuánto tiempo de mi equipo consumirá la implementación?" a="Menos de 2 horas. Tras la auditoría inicial de 30-60 min, nosotros nos encargamos del diseño, arquitectura y despliegue técnico total." />
          <FaqItem q="¿Es seguro conectar mis datos?" a="Absolutamente. Trabajamos bajo protocolos de cifrado y, si es necesario, desplegamos modelos de IA privados para que tus datos nunca abandonen tu infraestructura." />
          <FaqItem q="¿Qué ROI medio tienen vuestros proyectos?" a="El ROI promedio es de 3 meses. Recuperamos la inversión inicial eliminando salarios ocultos en tareas repetitivas." />
          <FaqItem q="¿Firmáis garantías de confidencialidad?" a="Firmamos NDA estricto con todos nuestros clientes antes de acceder a cualquier mapa de procesos o dato operativo." />
        </div>
      </section>

      {/* 9. FINAL CTA (Audit) */}
      <section id="auditoria" className="container mx-auto px-6 max-w-[1240px]">
        <div className="glass-card rounded-[32px] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-16 border-primary-blue/20 shadow-2xl shadow-primary-blue/5">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Auditoría estratégica <span className="text-primary-blue">gratuita</span> (Limitada)</h2>
            <p className="text-white/50 text-xl mb-12 font-light leading-relaxed">
              En 30 minutos identificamos cuánto margen estás perdiendo mensualmente y qué sistema tendría mayor impacto inmediato.
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 mb-10 text-xs text-white/40 italic">
              Nota: Solo aceptamos un número reducido de implementaciones al mes para garantizar la calidad y el plazo de 14 días.
            </div>

            <ul className="space-y-6 mb-12 text-left">
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                </div>
                <span>Mapa de ineficiencias monetizadas</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                </div>
                <span>Cálculo de retorno de inversión (ROI)</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="w-6 h-6 rounded-full bg-primary-blue/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                </div>
                <span>Hoja de ruta de implementación inmediata</span>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <div className="mb-8 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Recuperar margen ahora</h3>
              <p className="text-white/30 text-xs">Si no detectamos retorno claro, no recomendamos implementar nada.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER */}
      <section className="container mx-auto px-6 max-w-[1240px] text-center my-20">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">No vendemos automatización. Vendemos margen operativo.</h3>
          <p className="text-white/40 text-sm italic font-light">
            Si en la auditoría no vemos un retorno económico claro para tu empresa, no recomendaremos implementar ningún sistema.
          </p>
        </div>
      </section>
    </div>
  );
}

function HeroBullet({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
      <div className="text-primary-blue shrink-0 mt-1">{icon}</div>
      <p className="text-white/70 text-sm leading-snug">{text}</p>
    </div>
  );
}

function PainCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <motion.div
      {...fadeIn}
      className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4 group hover:border-primary-blue/30 transition-all"
    >
      <div className="text-primary-blue group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-sm font-medium text-white/80">{title}</span>
    </motion.div>
  );
}

function SystemCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      {...fadeIn}
      className="glass-card p-10 rounded-[24px] hover:border-primary-blue/40 transition-all group"
    >
      <div className="text-primary-blue mb-8 group-hover:scale-110 transition-transform origin-left">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/40 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}

function StatCard({ value, label, sub }: { value: string, label: string, sub: string }) {
  return (
    <div className="p-4 text-center">
      <div className="text-5xl font-bold text-white mb-2 tracking-tighter">{value}</div>
      <div className="text-primary-blue font-bold uppercase tracking-widest text-[10px] mb-1">{label}</div>
      <div className="text-white/30 text-[10px] italic">{sub}</div>
    </div>
  );
}

function CaseCard({ title, context, problem, system, result }: any) {
  return (
    <motion.div
      {...fadeIn}
      className="glass-card p-10 rounded-[28px] flex flex-col hover:bg-white/[0.04] transition-all border-white/5"
    >
      <div className="mb-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-blue mb-2 italic">{context}</div>
        <h4 className="text-2xl font-bold text-white">{title}</h4>
      </div>
      <div className="space-y-8 flex-grow mt-8">
        <div>
          <div className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Fuga Operativa</div>
          <div className="text-sm text-white/60 leading-relaxed font-light">{problem}</div>
        </div>
        <div>
          <div className="text-[10px] text-primary-blue/50 uppercase tracking-widest mb-3">Sistema de Recuperación</div>
          <div className="text-sm text-white/60 leading-relaxed font-light">{system}</div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
        <div>
          <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Impacto Medido</div>
          <div className="text-lg font-bold text-white italic">"{result}"</div>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-primary-blue font-bold">Implementado sin aumentar equipo.</div>
      </div>
    </motion.div>
  );
}

function ProcessStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <motion.div
      {...fadeIn}
      className="relative z-10 md:px-10 pb-12 md:pb-0 group"
    >
      <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary-blue font-bold mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all soft-shadow">
        {num}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/40 leading-relaxed text-sm font-light">{desc}</p>
    </motion.div>
  );
}

function PricingCard({ name, price, sub, features, featured }: any) {
  return (
    <motion.div
      {...fadeIn}
      className={cn(
        "p-12 rounded-[32px] flex flex-col transition-all relative",
        featured
          ? "bg-primary-blue/10 border-2 border-primary-blue/40 scale-[1.02] z-10 soft-shadow"
          : "glass-card"
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-blue px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em]">
          Más solicitado
        </div>
      )}
      <div className="text-xs font-bold mb-4 text-white/40 uppercase tracking-[0.2em]">{name}</div>
      <div className="text-2xl lg:text-3xl font-bold mb-1 tracking-tight">{price}</div>
      <div className="text-[10px] text-white/40 uppercase tracking-widest mb-10 leading-relaxed">{sub}</div>
      <ul className="space-y-4 mb-12 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-4 text-white/60 text-xs text-left">
            <CheckCircle2 className="w-4 h-4 text-primary-blue mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={cn(
        "w-full py-4 rounded-2xl text-center font-bold text-xs uppercase tracking-widest transition-all",
        featured ? "btn-gradient text-white" : "bg-white/5 text-white hover:bg-white/10"
      )}>
        Seleccionar
      </Link>
    </motion.div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden glass-card transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/3 transition-all"
      >
        <span className="font-bold text-sm md:text-base pr-4">{q}</span>
        {open ? <Minus className="w-4 h-4 text-primary-blue shrink-0" /> : <Plus className="w-4 h-4 text-white/30 shrink-0" />}
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="px-6 pb-6 text-white/40 text-sm leading-relaxed border-t border-white/5 pt-4"
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
    <div className="h-full flex flex-col items-center justify-center text-center py-10">
      <div className="w-16 h-16 rounded-full bg-primary-blue/20 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-8 h-8 text-primary-blue" />
      </div>
      <h3 className="text-2xl font-bold mb-4">Solicitud enviada</h3>
      <p className="text-white/40">Nos pondremos en contacto contigo en menos de 24 horas laborables.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <input required name="hours_manual" placeholder="¿Cuántas horas semanales dedica el equipo a tareas manuales?" className="w-full bg-white/5 border border-primary-blue/40 rounded-xl px-4 py-3 text-sm border-primary-blue/40 focus:border-primary-blue outline-none transition-all" />
      <input required name="pain" placeholder="¿Cuál es el principal cuello de botella hoy?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all" />
      <textarea name="message" rows={2} placeholder="Comentarios adicionales" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary-blue outline-none transition-all resize-none"></textarea>

      <button
        disabled={loading}
        className="w-full py-4 rounded-2xl btn-gradient text-white font-bold text-xs uppercase tracking-[0.2em] transition-all soft-shadow mt-4"
      >
        {loading ? "Procesando..." : "Confirmar Auditoría"}
      </button>
    </form>
  );
}
