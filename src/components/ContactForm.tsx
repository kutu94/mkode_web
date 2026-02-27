"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
    onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            onSuccess();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Nombre completo</label>
                <input
                    required
                    name="name"
                    placeholder="Ej: Dirección de Operaciones"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all placeholder:text-white/10"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Email corporativo</label>
                <input
                    required
                    name="email"
                    type="email"
                    placeholder="email@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all placeholder:text-white/10"
                />
                <p className="text-[9px] text-white/20 ml-2 italic">Trabajamos únicamente con emails corporativos.</p>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Empresa</label>
                <input
                    required
                    name="company"
                    placeholder="Nombre legal o comercial"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all placeholder:text-white/10"
                />
            </div>

            <div className="space-y-2 relative">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Facturación anual aproximada</label>
                <div className="relative">
                    <select
                        required
                        name="revenue_range"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none text-white/50 cursor-pointer"
                    >
                        <option value="" className="bg-[#020208]">Seleccionar rango</option>
                        <option value="0-500k" className="bg-[#020208]">0 – 500k€</option>
                        <option value="500k-1M" className="bg-[#020208]">500k€ – 1M€</option>
                        <option value="1M-5M" className="bg-[#020208]">1M€ – 5m€</option>
                        <option value="5M-20M" className="bg-[#020208]">5M€ – 20M€</option>
                        <option value="+20M" className="bg-[#020208]">+20M€</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                </div>
            </div>

            <div className="space-y-2 relative">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Horas semanales en tareas manuales</label>
                <div className="relative">
                    <select
                        required
                        name="hours_manual"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none text-white/50 cursor-pointer"
                    >
                        <option value="" className="bg-[#020208]">Seleccionar estimación</option>
                        <option value="<10h" className="bg-[#020208]">&lt;10h</option>
                        <option value="10-30h" className="bg-[#020208]">10 – 30h</option>
                        <option value="30-80h" className="bg-[#020208]">30 – 80h</option>
                        <option value="+80h" className="bg-[#020208]">+80h</option>
                        <option value="unknown" className="bg-[#020208]">No lo tengo cuantificado</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                </div>
            </div>

            <div className="space-y-2 relative">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] ml-2 text-white/20">Principal cuello de botella operativo</label>
                <div className="relative">
                    <select
                        required
                        name="pain"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary-blue outline-none transition-all appearance-none text-white/50 cursor-pointer"
                    >
                        <option value="" className="bg-[#020208]">Seleccionar problema</option>
                        <option value="data-entry" className="bg-[#020208]">Doble entrada de datos / errores</option>
                        <option value="repetitive" className="bg-[#020208]">Procesos manuales repetitivos</option>
                        <option value="integrations" className="bg-[#020208]">Falta de integración de sistemas</option>
                        <option value="pipeline" className="bg-[#020208]">Prospección / generación de pipeline</option>
                        <option value="support" className="bg-[#020208]">Atención al cliente lenta</option>
                        <option value="reporting" className="bg-[#020208]">Reporting y facturación</option>
                        <option value="other" className="bg-[#020208]">Otro</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                </div>
            </div>

            <button
                disabled={loading}
                type="submit"
                className={cn(
                    "w-full py-5 rounded-2xl btn-primary text-white mt-10 text-xs uppercase tracking-widest transition-all",
                    loading && "opacity-50 cursor-wait"
                )}
            >
                {loading ? "Procesando data..." : "Confirmar envío"}
            </button>
        </form>
    );
}
