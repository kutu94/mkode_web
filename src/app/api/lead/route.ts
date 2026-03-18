import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, company, revenue_range, hours_manual, pain, message } = body

        // basic validation
        if (!name || !email || !company || !pain) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const supabase = getSupabase()
        const { data, error } = await supabase
            .from('leads')
            .insert([
                {
                    name,
                    email,
                    company,
                    revenue_range,
                    hours_manual,
                    pain,
                    message,
                    created_at: new Date().toISOString()
                }
            ])
            .select()

        if (error) {
            console.error('Supabase error:', error)
            return NextResponse.json(
                { error: 'Error saving lead' },
                { status: 500 }
            )
        }

        try {
            await resend.emails.send({
                from: 'MKode Leads <onboarding@resend.dev>',
                to: 'mkode.pro@gmail.com',
                subject: `🔥 Nuevo Lead B2B: ${company} - ${name}`,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2 style="color: #0A4190;">Nuevo Lead de Auditoría B2B</h2>
                        <ul style="list-style: none; padding: 0; font-size: 16px; line-height: 1.6;">
                            <li><strong>Nombre:</strong> ${name}</li>
                            <li><strong>Email corporativo:</strong> ${email}</li>
                            <li><strong>Empresa:</strong> ${company}</li>
                            <li><strong>Facturación:</strong> ${revenue_range}</li>
                            <li><strong>Horas Manuales:</strong> ${hours_manual}</li>
                            <li><strong>Cuello de Botella:</strong> ${pain}</li>
                        </ul>
                    </div>
                `
            })
        } catch (emailError) {
            console.error('Error enviando email con Resend:', emailError)
            // No bloqueamos la respuesta exitosa si falla el email, ya que el lead sí se guardó.
        }

        return NextResponse.json({ success: true, data })
    } catch (err) {
        console.error('API error:', err)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
