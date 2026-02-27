"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function CalendlyView() {
    return (
        <div className="w-full text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 md:p-20 rounded-[48px] border-primary-blue/20"
            >
                <h2 className="text-title text-5xl md:text-7xl mb-6 text-white text-center">Reserva tu diagnóstico estratégico</h2>
                <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto font-light text-center">
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

                <p className="mt-12 text-white/20 text-xs uppercase tracking-[0.2em] font-bold text-center">
                    La sesión dura 30 minutos. Revisaremos cifras reales, no teoría.
                </p>
            </motion.div>
        </div>
    );
}
