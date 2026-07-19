import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const text = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

function buildMessage(hoursManual: string, comments: string) {
  const sections = [
    hoursManual ? `[Horas manuales aproximadas]\n${hoursManual}` : "",
    comments ? `[Comentarios adicionales]\n${comments}` : "",
  ].filter(Boolean);

  return sections.join("\n\n").slice(0, 2000) || null;
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const input = body as Record<string, unknown>;
    const hoursManual = text(input.hours_manual, 160);
    const comments = text(input.message, 1600);
    const lead = {
      name: text(input.name, 120),
      email: text(input.email, 254).toLowerCase(),
      company: text(input.company, 160),
      revenue_range: text(input.revenue_range, 60) || null,
      pain: text(input.pain, 500),
      message: buildMessage(hoursManual, comments),
      created_at: new Date().toISOString(),
    };

    if (!lead.name || !lead.email || !lead.company || !lead.pain) {
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
