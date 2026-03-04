"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, Zap, Coins } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CalendlyView from "@/components/CalendlyView";

export default function ContactPage() {
    const [showCalendly, setShowCalendly] = useState(false);

    if (showCalendly) {
        return (
            <div className="min-h-screen pt-40 pb-40 bg-grid-refined">
                <div className="container mx-auto px-6 max-w-[1240px]">
                    <CalendlyView />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-40 pb-40 bg-grid-refined">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary-blue text-[10px] font-bold uppercase tracking-[0.2em]">
                            Auditoría Estratégica Gratuita (Limitada)
                        </div>
                        <h1 className="text-title text-5xl md:text-8xl mb-10 leading-[0.95]">Mide tu <span className="text-primary-blue">fuga de margen</span> hoy</h1>
                        <p className="text-white/40 text-xl md:text-2xl leading-relaxed mb-12 font-light text-balance">
                            En 30 minutos identificamos cuánto margen está perdiendo tu empresa mensualmente y qué sistema tendría mayor impacto ahora.
                        </p>

                        <div className="p-8 rounded-[32px] bg-white/[0.01] border border-white/[0.05] mb-20 text-xs text-white/30 italic font-light leading-relaxed max-w-lg">
                            Solo aceptamos un número reducido de implementaciones al mes para garantizar la recuperación de margen en el plazo de 14 días.
                        </div>

                        <div className="space-y-16">
                            <ContactFeature
                                icon={<Coins className="w-8 h-8 text-primary-blue" />}
                                title="Mapa de Fuga Económica"
                                desc="Determinamos el coste anual oculto en tus procesos manuales actuales mediante auditoría técnica."
                            />
                            <ContactFeature
                                icon={<Zap className="w-8 h-8 text-primary-blue" />}
                                title="Cálculo de ROI (Retorno)"
                                desc="Recibirás una estimación honesta de en cuántos meses se pagará la inversión necesaria."
                            />
                            <ContactFeature
                                icon={<ShieldCheck className="w-8 h-8 text-primary-blue" />}
                                title="Compromiso MKode"
                                desc="Si el retorno no es claro, te daremos la hoja de ruta gratuita sin recomendar implementación."
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-card p-12 md:p-16 rounded-[48px] border-white/[0.08] shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-20" />

                        <div className="mb-12 text-center lg:text-left relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">Cualificación de Impacto</h3>
                            <p className="text-white/30 text-base font-light italic">Información tratada bajo estricto NDA.</p>
                        </div>

                        <div className="relative z-10">
                            <ContactForm onSuccess={() => setShowCalendly(true)} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function ContactFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex gap-8 group">
            <div className="mt-1 shrink-0 bg-white/[0.02] w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:border-primary-blue/30 group-hover:scale-110">
                {icon}
            </div>
            <div>
                <h3 className="text-white font-bold text-base uppercase tracking-[0.2em] mb-3 group-hover:text-primary-blue transition-colors">{title}</h3>
                <p className="text-white/30 text-base leading-relaxed font-light">{desc}</p>
            </div>
        </div>
    );
}
