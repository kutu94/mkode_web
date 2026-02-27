"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, Clock, Zap, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
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
                        <h1 className="text-title text-5xl md:text-8xl mb-10 leading-[0.95]">Mide la <span className="text-primary-blue">pérdida de margen</span> actual</h1>
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

                        {success ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-24 relative z-10">
                                <div className="w-24 h-24 rounded-3xl bg-primary-blue/20 flex items-center justify-center mb-10 shadow-2xl border border-primary-blue/30">
                                    <CheckCircle2 className="w-12 h-12 text-primary-blue" />
                                </div>
                                <h2 className="text-title text-4xl mb-6">Solicitud recibida</h2>
                                <p className="text-white/40 mb-12 font-light text-lg">Un ingeniero de MKode te contactará en menos de 24h laborables.</p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="text-primary-blue font-bold text-xs uppercase tracking-[0.3em] hover:brightness-125 transition-all"
                                >
                                    Volver al formulario
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInput required label="Nombre completo" name="name" placeholder="Ej: Dirección de Operaciones" />
                                    <FormInput required label="Email corporativo" name="email" type="email" placeholder="email@empresa.com" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FormInput required label="Empresa" name="company" placeholder="Nombre legal" />
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] ml-2">Facturación est.</label>
                                        <select required name="revenue_range" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none cursor-pointer text-white/50 font-light">
                                            <option className="bg-[#020208]" value="">Seleccionar rango</option>
                                            <option className="bg-[#020208]" value="<100k">Menos de 100k€</option>
                                            <option className="bg-[#020208]" value="100k-500k">100k€ - 500k€</option>
                                            <option className="bg-[#020208]" value="500k-2M">500k€ - 2M€</option>
                                            <option className="bg-[#020208]" value=">2M">Más de 2M€</option>
                                        </select>
                                    </div>
                                </div>

                                <FormInput required label="¿Horas manuales semanales del equipo?" name="hours_manual" placeholder="Ej: 15 horas entre 3 personas" highlight />

                                <FormInput required label="Principal ineficiencia detectada" name="pain" placeholder="Ej: Doble entrada de datos CRM" />

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] ml-2">Mensaje (opcional)</label>
                                    <textarea name="message" rows={3} placeholder="Dinos algo más..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all text-white font-light resize-none"></textarea>
                                </div>

                                <button
                                    disabled={loading}
                                    type="submit"
                                    className={cn(
                                        "w-full btn-primary py-5 mt-6",
                                        loading && "opacity-70 cursor-wait"
                                    )}
                                >
                                    {loading ? "Procesando..." : "Confirmar Solicitud de Auditoría"}
                                </button>
                            </form>
                        )}
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

function FormInput({ label, name, type = "text", placeholder, required, highlight }: any) {
    return (
        <div className="space-y-2">
            <label className={cn("text-[10px] font-bold uppercase tracking-[0.2em] ml-2", highlight ? "text-primary-blue" : "text-white/20")}>{label}</label>
            <input
                required={required}
                name={name}
                type={type}
                placeholder={placeholder}
                className={cn(
                    "w-full bg-white/5 border rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all text-white font-light",
                    highlight ? "border-primary-blue/20" : "border-white/10"
                )}
            />
        </div>
    );
}
