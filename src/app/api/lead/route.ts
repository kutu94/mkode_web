import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
const MAX_BODY_BYTES = 16 * 1024;

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

function buildMessage(input: Record<string, unknown>) {
  const sections = [
    ["Cargo o responsabilidad", text(input.role, 160)],
    ["Herramientas implicadas", text(input.tools, 500)],
    ["Horas manuales aproximadas", text(input.hours_manual, 160)],
    ["Comentarios adicionales", text(input.message, 1200)],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `[${label}]\n${value}`);

  return sections.join("\n\n").slice(0, 2000) || null;
}

export async function POST(req: Request) {
  try {
    const declaredLength = Number(req.headers.get("content-length") ?? 0);
    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request body too large" }, { status: 413 });
    }

    const body: unknown = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const input = body as Record<string, unknown>;
    if (text(input.website, 200)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const role = text(input.role, 160);
    const requiresRole = text(input.form_source, 80) === "consultoras_mexico";
    const lead = {
      name: text(input.name, 120),
      email: text(input.email, 254).toLowerCase(),
      company: text(input.company, 160),
      revenue_range: text(input.revenue_range, 60) || null,
      pain: text(input.pain, 500),
      message: buildMessage(input),
      created_at: new Date().toISOString(),
    };

    if (!lead.name || !lead.email || !lead.company || !lead.pain || (requiresRole && !role)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const supabase = getSupabase();
    const { error } = await supabase.from("leads").insert([lead]);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Error saving lead" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
