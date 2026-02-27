"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Search, Workflow, TrendingUp } from "lucide-react";
import Link from "next/link";

const cases = [
    {
        title: "Triage Inteligente de Comunicaciones",
        context: "Impacto: 2-4h administrativas recuperadas/día",
        problem: "Cientos de correos entrantes diarios que requerían clasificación manual. El coste en horas-hombre superaba los 1.200€ mensuales solo en filtrado.",
        solution: "Agente de IA que procesa, identifica urgencia y sincroniza con el ERP. Eliminación total de la intervención humana en el triage.",
        result: "Ahorro est. anual: 15.000€",
        detail: "+18h semanales liberadas para tareas comerciales.",
        tags: ["IA Generativa", "ROI Enfocado", "NLP"],
        icon: <MessageSquare className="w-8 h-8" />
    },
    {
        title: "Automatización de Prospección B2B",
        context: "Impacto: Incremento del 300% en reuniones",
        problem: "Proceso de prospección manual lento con baja tasa de conversión. El pipeline estaba estancado por falta de volumen cualificado.",
        solution: "Pipeline automatizado de búsqueda y personalización masiva mediante IA. Secuencias dinámicas basadas en señales de compra.",
        result: "Pipeline est. trimestral: +40.000€",
        detail: "24 reuniones mensuales adicionales sin aumentar equipo.",
        tags: ["Growth Engineering", "Outreach", "AI"],
        icon: <Search className="w-8 h-8" />
    },
    {
        title: "Sincronización de Ecosistema SaaS",
        context: "Impacto: Margen recuperado por error 0",
        problem: "Desconexión entre CRM y Facturación. Los errores de datos generaban pérdidas estimadas del 5% del margen por facturas incorrectas.",
        solution: "Arquitectura basada en eventos que asegura consistencia total. Eliminación de la doble entrada de datos y recálculo automático.",
        result: "Recuperación de margen: 5% facturado",
        detail: "Eliminación del 100% de errores administrativos.",
        tags: ["Integración Core", "Data Integrity", "APIs"],
        icon: <Workflow className="w-8 h-8" />
    }
];

export default function CasesPage() {
    return (
        <div className="min-h-screen py-32 container mx-auto px-6 max-w-[1240px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mb-24"
            >
                <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-primary-blue/30 bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-widest">
                    Casos con Impacto Medido
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">No instalamos software. <span className="text-primary-blue">Recuperamos margen.</span></h1>
                <p className="text-white/40 text-xl leading-relaxed font-light">
                    La ingeniería de procesos no es un gasto, es una inversión con retorno medible. Aquí mostramos el impacto económico de eliminar la ineficiencia.
                </p>
            </motion.div>

            <div className="flex flex-col gap-12">
                {cases.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-14 rounded-[40px] glass-card group hover:border-primary-blue/20 transition-all"
                    >
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4 mb-8 text-primary-blue">
                                {item.icon}
                                <div className="h-px flex-grow bg-white/5" />
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tags.map((tag, j) => (
                                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{item.title}</h2>
                            <div className="text-[10px] text-primary-blue font-bold uppercase tracking-[0.3em] mb-10 italic">{item.context}</div>

                            <div className="space-y-10 flex-grow">
                                <div>
                                    <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-3 opacity-50 italic">Fuga Económica (Problema)</h3>
                                    <p className="text-white/60 leading-relaxed font-light text-sm">{item.problem}</p>
                                </div>
                                <div>
                                    <h3 className="text-primary-blue text-xs font-bold uppercase tracking-widest mb-3 italic">Sistema de Recuperación</h3>
                                    <p className="text-white/60 leading-relaxed font-light text-sm">{item.solution}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/[0.02] rounded-[32px] p-10 md:p-16 border border-white/5 flex flex-col justify-center text-center lg:text-left">
                            <div className="mb-8 flex items-center justify-center lg:justify-start gap-3">
                                <TrendingUp className="text-primary-blue w-6 h-6" />
                                <span className="text-white font-bold uppercase tracking-widest text-[10px]">Retorno Estimado</span>
                            </div>
                            <div className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-6 tracking-tighter">
                                {item.result}
                            </div>
                            <p className="text-white/40 text-sm mb-12 italic">{item.detail}</p>

                            <div className="pt-10 border-t border-white/5">
                                <Link href="/contact" className="text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center lg:justify-start gap-3 group/btn hover:text-primary-blue transition-colors">
                                    Solicitar análisis de ROI para mi caso
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-32 p-16 rounded-[40px] glass-card text-center border-primary-blue/10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Tu margen está en juego</h2>
                <p className="text-white/40 mb-12 max-w-2xl mx-auto font-light">
                    Cada día que pasa sin automatizar, es una pérdida irrecuperable de margen operativo. Analicemos tu caso.
                </p>
                <Link href="/contact" className="inline-flex px-12 py-5 rounded-2xl btn-gradient text-white font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 soft-shadow">
                    Solicitar Auditoría de Recuperación
                </Link>
            </div>
        </div>
    );
}
