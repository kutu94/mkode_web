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
        <div className="min-h-screen py-32 container mx-auto px-6 max-w-[1240px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-primary-blue/30 bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-widest">
                        Auditoría Estratégica Gratuita (Limitada)
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">Mide la <span className="text-primary-blue">pérdida de margen</span> actual</h1>
                    <p className="text-white/40 text-xl leading-relaxed mb-8 font-light">
                        En 30 minutos identificamos cuánto margen está perdiendo tu empresa mensualmente por ineficiencias técnicas y qué sistema tendría mayor impacto y ROI inmediato.
                    </p>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 mb-16 text-xs text-white/40 italic leading-relaxed max-w-lg">
                        Solo aceptamos un número reducido de implementaciones al mes para garantizar la recuperación de margen en el plazo de 14 días.
                    </div>

                    <div className="space-y-12">
                        <ContactFeature
                            icon={<Coins className="w-6 h-6 text-primary-blue" />}
                            title="Mapa de Fuga Económica"
                            desc="Determinamos el coste anual oculto en tus procesos manuales actuales."
                        />
                        <ContactFeature
                            icon={<Zap className="w-6 h-6 text-primary-blue" />}
                            title="Cálculo de ROI (Retorno)"
                            desc="Recibirás una estimación honesta de en cuántos meses se pagará la inversión técnica."
                        />
                        <ContactFeature
                            icon={<ShieldCheck className="w-6 h-6 text-primary-blue" />}
                            title="Compromiso MKode"
                            desc="Si no detectamos un retorno claro y medible, no recomendaremos implementar ningún sistema."
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card p-10 md:p-14 rounded-[40px] soft-shadow"
                >
                    {success ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20">
                            <div className="w-20 h-20 rounded-full bg-primary-blue/20 flex items-center justify-center mb-8">
                                <CheckCircle2 className="w-10 h-10 text-primary-blue" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Solicitud de Auditoría recibida</h2>
                            <p className="text-white/40 mb-12 font-light">Un ingeniero de MKode analizará tu caso y te contactará en 24h para agendar la sesión.</p>
                            <button
                                onClick={() => setSuccess(false)}
                                className="text-primary-blue font-bold text-xs uppercase tracking-widest hover:underline"
                            >
                                Volver al formulario
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Nombre</label>
                                    <input required name="name" type="text" placeholder="Ej: Dirección de Operaciones" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Email corporativo</label>
                                    <input required name="email" type="email" placeholder="email@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all text-white" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Empresa</label>
                                    <input required name="company" type="text" placeholder="Nombre legal" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Facturación est.</label>
                                    <select required name="revenue_range" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none cursor-pointer text-white/60">
                                        <option className="bg-[#020208]" value="">Seleccionar rango</option>
                                        <option className="bg-[#020208]" value="<100k">Menos de 100k€</option>
                                        <option className="bg-[#020208]" value="100k-500k">100k€ - 500k€</option>
                                        <option className="bg-[#020208]" value="500k-2M">500k€ - 2M€</option>
                                        <option className="bg-[#020208]" value=">2M">Más de 2M€</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-primary-blue/70 uppercase tracking-[0.2em] ml-2">¿Cuántas horas semanales dedica tu equipo a tareas manuales?</label>
                                <input required name="hours_manual" type="text" placeholder="Ej: 15 horas entre 3 personas" className="w-full bg-white/5 border border-primary-blue/20 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all text-white" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] ml-2">Principal ineficiencia detectada</label>
                                <input required name="pain" type="text" placeholder="Ej: Error en la entrada de datos de facturación" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all text-white" />
                            </div>

                            <button
                                disabled={loading}
                                type="submit"
                                className={cn(
                                    "w-full py-6 rounded-2xl btn-gradient text-white font-bold text-xs uppercase tracking-[0.25em] soft-shadow transition-all hover:scale-[1.01] mt-4",
                                    loading && "opacity-70 cursor-wait"
                                )}
                            >
                                {loading ? "Calculando..." : "Confirmar Solicitud de Auditoría"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

function ContactFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex gap-6">
            <div className="mt-1 shrink-0 bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center border border-white/5">
                {icon}
            </div>
            <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{desc}</p>
            </div>
        </div>
    );
}
