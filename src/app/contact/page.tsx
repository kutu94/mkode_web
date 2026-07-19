"use client";

import { motion } from "framer-motion";
import { FormEvent, ReactNode, useState } from "react";
import { CheckCircle2, ShieldCheck, Zap, Coins } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error(`Lead request failed with status ${response.status}`);
      setSuccess(true); form.reset();
    } catch (submissionError) {
      console.error(submissionError);
      setError("No pudimos enviar la solicitud. Inténtelo de nuevo o escriba a marcos.quintana@mkode.es.");
    } finally { setLoading(false); }
  }

  return (
    <div className="container mx-auto min-h-screen max-w-[1240px] px-4 py-20 sm:px-6 md:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="mb-6 inline-block rounded-full border border-primary-blue/30 bg-primary-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300 md:mb-8">Revisión de encaje</div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-white md:mb-8 md:text-7xl">Mida la <span className="text-blue-300">fricción operativa</span> actual</h1>
          <p className="mb-8 text-lg font-light leading-relaxed text-white/70 md:text-xl">Revisamos su proceso para identificar tareas manuales, desconexiones y oportunidades de automatización con alcance medible.</p>
          <div className="mb-12 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-5 text-sm italic leading-relaxed text-white/70 md:mb-16 md:p-6">Si no detectamos una oportunidad clara y razonable, no recomendaremos implementar un sistema.</div>
          <div className="space-y-8 md:space-y-12">
            <ContactFeature icon={<Coins className="h-6 w-6 text-blue-300" />} title="Mapa de fricción" desc="Identificamos tareas repetitivas y puntos donde se pierde tiempo operativo." />
            <ContactFeature icon={<Zap className="h-6 w-6 text-blue-300" />} title="Estimación de impacto" desc="Definimos métricas y supuestos antes de recomendar una implementación." />
            <ContactFeature icon={<ShieldCheck className="h-6 w-6 text-blue-300" />} title="Compromiso MKode" desc="El alcance y las limitaciones quedan definidos antes de comenzar." />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card rounded-[28px] p-6 soft-shadow sm:p-8 md:rounded-[40px] md:p-14">
          {success ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center md:py-20" role="status">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary-blue/20"><CheckCircle2 className="h-10 w-10 text-blue-300" /></div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Solicitud de revisión recibida</h2>
              <p className="mb-12 font-light text-white/70">Analizaremos la información y responderemos por correo.</p>
              <button onClick={() => setSuccess(false)} className="rounded-md text-xs font-bold uppercase tracking-widest text-blue-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">Solicitar otra revisión</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate={false}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"><Field id="contact-name" label="Nombre"><input required id="contact-name" name="name" autoComplete="name" type="text" className={inputClass} /></Field><Field id="contact-email" label="Email corporativo"><input required id="contact-email" name="email" autoComplete="email" type="email" className={inputClass} /></Field></div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"><Field id="contact-company" label="Empresa"><input required id="contact-company" name="company" autoComplete="organization" type="text" className={inputClass} /></Field><Field id="contact-revenue" label="Facturación estimada"><select id="contact-revenue" name="revenue_range" className={cn(inputClass, "appearance-none text-white/80")} defaultValue=""><option className="bg-[#020208]" value="">Prefiero no indicarlo</option><option className="bg-[#020208]" value="<100k">Menos de 100k€</option><option className="bg-[#020208]" value="100k-500k">100k€ - 500k€</option><option className="bg-[#020208]" value="500k-2M">500k€ - 2M€</option><option className="bg-[#020208]" value=">2M">Más de 2M€</option></select></Field></div>
              <Field id="contact-hours" label="Horas semanales aproximadas en tareas manuales"><input required id="contact-hours" name="hours_manual" type="text" placeholder="Ej.: 15 horas entre 3 personas" className={cn(inputClass, "border-primary-blue/30")} /></Field>
              <Field id="contact-pain" label="Principal ineficiencia detectada"><input required id="contact-pain" name="pain" type="text" className={inputClass} /></Field>
              <p className="text-xs leading-relaxed text-white/70">Al enviar este formulario, MKode tratará sus datos para responder a la solicitud. Consulte el <Link href="/privacidad" className="text-blue-300 underline">aviso de privacidad</Link>.</p>
              {error && <p className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100" role="alert">{error}</p>}
              <button disabled={loading} type="submit" className={cn("mt-4 w-full rounded-2xl px-4 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white btn-gradient soft-shadow transition-all hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300", loading && "cursor-wait opacity-70")}>{loading ? "Enviando..." : "Solicitar revisión de encaje"}</button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

const inputClass = "w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-all focus:border-primary-blue focus-visible:ring-2 focus-visible:ring-blue-300 md:px-6";
function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) { return <div className="space-y-2"><label htmlFor={id} className="ml-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70 md:ml-2 md:tracking-[0.18em]">{label}</label>{children}</div>; }
function ContactFeature({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) { return <div className="flex gap-5 md:gap-6"><div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">{icon}</div><div><h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-white">{title}</h3><p className="text-sm font-light leading-relaxed text-white/70">{desc}</p></div></div>; }
