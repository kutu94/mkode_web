"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Search, Workflow, TrendingUp } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const cases = [
    {
        title: "Triage Inteligente de Comunicaciones",
        context: "Impacto: 2-4h administrativas recuperadas/día",
        problem: "Cientos de correos diarios clasificados manualmente. El coste superaba los 1.200€ mensuales solo en filtrado técnico.",
        solution: "Agente de IA que procesa, identifica urgencia y sincroniza con el ERP. Eliminación total de la intervención humana.",
        result: "Ahorro est. anual: 15.000€",
        detail: "+18h semanales liberadas para tareas directas de negocio.",
        tags: ["IA Generativa", "ROI Enfocado", "NLP"],
        icon: <MessageSquare className="w-10 h-10" />
    },
    {
        title: "Automatización de Prospección B2B",
        context: "Impacto: Incremento del 300% en reuniones",
        problem: "Proceso manual lento con baja conversión. El pipeline estaba estancado por falta de volumen cualificado constante.",
        solution: "Pipeline automatizado de búsqueda y personalización mediante IA. Secuencias dinámicas basadas en señales de compra.",
        result: "Pipeline trimestral: +40.000€",
        detail: "24 reuniones mensuales adicionales sin aumentar equipo administrativo.",
        tags: ["Growth Engineering", "Outreach", "AI"],
        icon: <Search className="w-10 h-10" />
    },
    {
        title: "Sincronización de Ecosistema SaaS",
        context: "Impacto: Margen recuperado por error 0",
        problem: "Desconexión entre CRM y Facturación. Los errores generaban pérdidas del 5% del margen por inconsistencias.",
        solution: "Arquitectura basada en eventos que asegura consistencia total. Eliminación de la doble entrada y recálculo automático.",
        result: "Recuperación: 5% facturado",
        detail: "Eliminación del 100% de errores administrativos registrados.",
        tags: ["Integración Core", "Data Integrity", "APIs"],
        icon: <Workflow className="w-10 h-10" />
    }
];

export default function CasesPage() {
    return (
        <div className="min-h-screen pt-40 pb-40 bg-grid-refined">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mb-32"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em]">
                        Impacto Económico Medido
                    </div>
                    <h1 className="text-title text-5xl md:text-8xl mb-10 leading-[0.95]">No instalamos software. <span className="text-primary-blue">Recuperamos margen.</span></h1>
                    <p className="text-white/30 text-xl font-light leading-relaxed max-w-2xl text-balance">
                        La ingeniería de procesos no es un gasto, es una inversión con retorno medible. Aquí mostramos el impacto económico real de eliminar la ineficiencia estructural.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {cases.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="whileInView"
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-10 md:p-20 rounded-[56px] glass-card border-white/[0.04] hover:border-primary-blue/20 transition-all duration-700 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-20" />

                            <div className="flex flex-col relative z-10">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-16 h-16 rounded-[20px] bg-white/[0.02] border border-white/10 flex items-center justify-center text-primary-blue">
                                        {item.icon}
                                    </div>
                                    <div className="h-px flex-grow bg-white/5" />
                                </div>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {item.tags.map((tag, j) => (
                                        <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-title text-3xl md:text-5xl mb-6">{item.title}</h2>
                                <div className="text-[10px] text-primary-blue font-bold uppercase tracking-[0.3em] mb-12 italic">{item.context}</div>

                                <div className="space-y-12">
                                    <div>
                                        <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 italic">Fuga Económica</h3>
                                        <p className="text-white/50 text-base leading-relaxed font-light">{item.problem}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-4 italic">Sistema de Recuperación</h3>
                                        <p className="text-white/50 text-base leading-relaxed font-light">{item.solution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/[0.01] rounded-[40px] p-12 md:p-20 border border-white/[0.03] flex flex-col justify-center text-center lg:text-left relative z-10 backdrop-blur-sm">
                                <div className="mb-10 flex items-center justify-center lg:justify-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                                        <TrendingUp className="text-primary-blue w-5 h-5" />
                                    </div>
                                    <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">Retorno Estimado</span>
                                </div>
                                <div className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter text-title leading-[0.9]">
                                    {item.result}
                                </div>
                                <p className="text-white/30 text-base mb-16 italic font-light">{item.detail}</p>

                                <div className="pt-12 border-t border-white/5">
                                    <Link href="/contact" className="text-white/60 font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center lg:justify-start gap-4 group/btn hover:text-primary-blue transition-all duration-500">
                                        Solicitar análisis de ROI
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="whileInView"
                    className="mt-40 p-20 rounded-[64px] glass-card text-center border-primary-blue/20 bg-primary-blue/[0.02]"
                >
                    <h2 className="text-title text-4xl md:text-6xl mb-8">Tu margen está en juego</h2>
                    <p className="text-white/30 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                        Cada día sin automatización es una pérdida irrecuperable de margen operativo. Analicemos tu caso.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/contact" className="btn-primary">
                            Solicitar Auditoría de Recuperación
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
