"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Cpu,
    Network,
    BrainCircuit,
    Zap,
    TrendingUp,
    TrendingDown,
    ShieldCheck,
    ShieldAlert
} from "lucide-react";
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

export default function LandingPage() {
    const [showCalendly, setShowCalendly] = useState(false);

    if (showCalendly) {
        return (
            <div className="min-h-screen bg-grid-refined pt-20 pb-20">
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <CalendlyView />
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col bg-grid-refined min-h-screen">
            {/* 1. HERO - Focused on immediate conversion */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-radial-hero">
                <div className="container mx-auto px-6 relative z-10 text-center py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-primary-blue/20 bg-primary-blue/5 backdrop-blur-md text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-pulse" />
                        Infraestructura de Recuperación de Margen
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
                        className="text-title text-5xl md:text-[5rem] mb-10 max-w-5xl mx-auto leading-[1] tracking-tighter"
                    >
                        Recupera el margen que tu empresa pierde cada semana en <span className="text-primary-blue">tareas manuales.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-white/40 mb-16 max-w-4xl mx-auto leading-relaxed font-light text-balance"
                    >
                        Diseñamos sistemas automatizados potenciados con inteligencia artificial que eliminan trabajo operativo y recuperan horas productivas en menos de 21 días.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
                        className="space-y-6"
                    >
                        <a href="#formulario" className="btn-primary text-xl px-16 py-6 inline-flex items-center gap-4">
                            Solicitar diagnóstico de automatización <ArrowRight className="w-6 h-6" />
                        </a>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                            Solo 3 implementaciones nuevas disponibles cada mes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. PROBLEMA */}
            <section className="py-48 container mx-auto px-6 max-w-[1240px] border-t border-white/[0.04]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={fadeInUp.initial}
                        whileInView={fadeInUp.whileInView}
                        viewport={fadeInUp.viewport}
                        transition={fadeInUp.transition as any}
                        className="text-title text-4xl md:text-7xl mb-12"
                    >
                        La mayoría de empresas pierde margen <span className="text-white/30">sin darse cuenta.</span>
                    </motion.h2>
                    <div className="space-y-8 text-white/40 text-xl font-light leading-relaxed mb-20 px-4">
                        <p>Tareas manuales repetitivas, sistemas desconectados y procesos administrativos invisibles generan pérdidas operativas millonarias cada año.</p>
                        <p className="text-primary-blue font-medium">Automatizar no es una opción técnica, es una necesidad financiera para escalar.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-4">
                            <ShieldAlert className="w-8 h-8 text-primary-blue/40" />
                            <span className="text-xs uppercase tracking-widest text-white/30">Error Operativo</span>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-4">
                            <TrendingDown className="w-8 h-8 text-primary-blue/40" />
                            <span className="text-xs uppercase tracking-widest text-white/30">Margen Reducido</span>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-4">
                            <Zap className="w-8 h-8 text-primary-blue/40" />
                            <span className="text-xs uppercase tracking-widest text-white/30">Baja Velocidad</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SOLUCIÓN */}
            <section className="py-48 bg-white/[0.01] border-y border-white/[0.04]">
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <SolutionCard
                            icon={<Cpu className="w-10 h-10" />}
                            title="Automatización de procesos"
                            desc="Eliminamos la carga manual en flujos operativos críticos mediante sistemas autónomos."
                        />
                        <SolutionCard
                            icon={<Network className="w-10 h-10" />}
                            title="Integración de herramientas"
                            desc="Conectamos tu stack tecnológico actual para que los datos fluyan sin intervención humana."
                        />
                        <SolutionCard
                            icon={<BrainCircuit className="w-10 h-10" />}
                            title="Agentes de IA operativos"
                            desc="Sistemas inteligentes que ejecutan tareas administrativas y de comunicación 24/7."
                        />
                    </div>
                </div>
            </section>

            {/* 4. RESULTADOS */}
            <section className="py-48 container mx-auto px-6 max-w-[1240px]">
                <div className="glass-card rounded-[56px] p-12 md:p-24 border-primary-blue/10 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left">
                        <div className="max-w-xl">
                            <h2 className="text-title text-4xl md:text-6xl mb-8">Impacto Financiero Medible</h2>
                            <p className="text-white/40 text-lg font-light leading-relaxed">
                                Nuestras implementaciones no son gastos, son inversiones con retorno directo en el estado de resultados de tu empresa.
                            </p>
                        </div>
                        <div className="p-12 rounded-[40px] bg-white/[0.02] border border-white/10 flex flex-col items-center">
                            <div className="text-primary-blue text-7xl font-bold mb-4">+15.000€</div>
                            <div className="text-white/40 text-xs uppercase tracking-[0.3em] font-bold">Ahorro anual por proceso</div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 blur-[120px] rounded-full" />
                </div>
            </section>

            {/* 5. PROCESO */}
            <section className="py-48 bg-white/[0.01] border-y border-white/[0.04]">
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <h2 className="text-title text-4xl md:text-7xl text-center mb-32">Ciclo de implementación</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        <Step num="01" title="Diagnóstico" desc="Auditoría técnica de flujos manuales y cuantificación de pérdida de margen." />
                        <Step num="02" title="Arquitectura" desc="Diseño del sistema automatizado y selección de herramientas óptimas." />
                        <Step num="03" title="Implementación" desc="Despliegue robusto y validación con métricas de rendimiento real." />
                    </div>
                </div>
            </section>

            {/* 6. FORMULARIO FINAL */}
            <section id="formulario" className="py-48 container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-title text-4xl md:text-7xl mb-8">Solicitar Diagnóstico</h2>
                    <p className="text-white/40 text-xl font-light italic">Breve sesión técnica. Sin compromiso si no hay retorno.</p>
                </div>

                <div className="glass-card p-12 md:p-16 rounded-[48px] border-white/10 shadow-2xl">
                    <ContactForm onSuccess={() => setShowCalendly(true)} />
                    <div className="mt-12 flex gap-4 p-6 rounded-2xl bg-primary-blue/5 border border-primary-blue/10">
                        <ShieldCheck className="w-6 h-6 text-primary-blue shrink-0" />
                        <p className="text-xs text-white/40 italic font-light leading-relaxed">
                            Si no detectamos un retorno claro (ROI) durante el diagnóstico, no recomendaremos implementar automatización. Operamos bajo estricto NDA técnico.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="py-20 text-center border-t border-white/[0.04]">
                <div className="container mx-auto px-6">
                    <img src="/logo.png" alt="MKode Logo" className="h-8 w-auto grayscale brightness-50 mx-auto mb-8" />
                    <p className="text-white/10 text-[10px] uppercase tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} MKode SYSTEMS. Infraestructura Aplicada.
                    </p>
                </div>
            </footer>
        </div>
    );
}

function SolutionCard({ icon, title, desc }: any) {
    return (
        <div className="p-12 rounded-[48px] bg-white/[0.02] border border-white/[0.05] group hover:border-primary-blue/30 transition-all duration-700">
            <div className="text-primary-blue mb-10 group-hover:scale-110 transition-transform origin-left">{icon}</div>
            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">{title}</h3>
            <p className="text-white/40 leading-relaxed text-lg font-light">{desc}</p>
        </div>
    );
}

function Step({ num, title, desc }: any) {
    return (
        <div className="text-center space-y-8">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue font-bold mx-auto text-xl">
                {num}
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-widest text-xs">{title}</h3>
            <p className="text-white/30 leading-relaxed font-light">{desc}</p>
        </div>
    );
}
