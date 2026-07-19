"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/45 focus:border-blue-300 focus-visible:ring-2 focus-visible:ring-blue-300";
const REQUEST_TIMEOUT_MS = 12_000;

export default function LeadFitForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`Lead request failed with status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} className="flex min-h-96 flex-col items-center justify-center text-center outline-none" role="status">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-blue/20">
          <CheckCircle2 className="h-8 w-8 text-blue-300" />
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white">Solicitud de revisión recibida</h3>
        <p className="max-w-md text-sm leading-relaxed text-white/75">Analizaremos la información y responderemos por correo.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-8 rounded-md text-sm font-semibold text-blue-300 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
          Solicitar otra revisión de encaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" data-analytics-event="lead_form" data-analytics-surface="consultoras_mexico">
      <input type="hidden" name="form_source" value="consultoras_mexico" />
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="fit-website">Sitio web</label>
        <input id="fit-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fit-name" label="Nombre"><input id="fit-name" name="name" autoComplete="name" required className={fieldClass} /></Field>
        <Field id="fit-email" label="Email corporativo"><input id="fit-email" name="email" type="email" autoComplete="email" required className={fieldClass} /></Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fit-company" label="Empresa"><input id="fit-company" name="company" autoComplete="organization" required className={fieldClass} /></Field>
        <Field id="fit-role" label="Cargo o responsabilidad"><input id="fit-role" name="role" autoComplete="organization-title" required className={fieldClass} /></Field>
      </div>
      <Field id="fit-pain" label="Principal fuga o paso manual"><textarea id="fit-pain" name="pain" rows={3} required placeholder="Describa el punto del flujo que necesita revisar." className={cn(fieldClass, "resize-y")} /></Field>
      <Field id="fit-tools" label="Herramientas implicadas (opcional)"><input id="fit-tools" name="tools" placeholder="Por ejemplo: correo, CRM, hojas de cálculo o calendario." className={fieldClass} /></Field>
      <Field id="fit-hours" label="Horas aproximadas dedicadas al proceso (opcional)"><input id="fit-hours" name="hours_manual" className={fieldClass} /></Field>
      <Field id="fit-message" label="Comentarios adicionales (opcional)"><textarea id="fit-message" name="message" rows={3} className={cn(fieldClass, "resize-y")} /></Field>

      <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-xs leading-relaxed text-white/70">
        <p className="font-semibold text-white">Información básica de privacidad</p>
        <p className="mt-2">
          Responsable: MKode LLC. Trataremos sus datos de identificación y contacto, empresa y cargo, y la información sobre el proceso, herramientas, horas y comentarios que facilite únicamente para evaluar el encaje, atender su solicitud y contactar con usted en relación con ella.
        </p>
        <p className="mt-2">
          Consulte el <Link href="/privacidad" className="rounded-sm text-blue-300 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">aviso de privacidad completo</Link>, actualmente en borrador y pendiente de revisión jurídica.
        </p>
      </div>

      <div className="space-y-3">
        <label htmlFor="fit-privacy" className="flex cursor-pointer items-start gap-3 text-sm text-white/80">
          <input id="fit-privacy" name="privacy_ack" type="checkbox" value="acknowledged" required className="mt-1 h-4 w-4 shrink-0 accent-blue-500" />
          <span>He leído el aviso de privacidad.</span>
        </label>
        <p className="text-xs leading-relaxed text-white/60">Este formulario está dirigido a profesionales mayores de edad.</p>
        <p className="text-xs font-medium leading-relaxed text-amber-100">No incluyas datos sensibles, información confidencial ni datos personales de terceros.</p>
      </div>

      {status === "error" && <p className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-100" role="alert">No pudimos enviar la solicitud. Inténtelo nuevamente o escriba a marcos.quintana@mkode.es.</p>}
      <button type="submit" disabled={status === "loading"} data-analytics-event="fit_review_submit" className={cn("w-full rounded-2xl px-5 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white btn-gradient soft-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300", status === "loading" && "cursor-wait opacity-70")}>{status === "loading" ? "Enviando..." : "Solicitar revisión de encaje"}</button>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return <div className="space-y-2"><label htmlFor={id} className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/75">{label}</label>{children}</div>;
}
