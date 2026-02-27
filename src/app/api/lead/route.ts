import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, company, revenue_range, pain, message } = body

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

        return NextResponse.json({ success: true, data })
    } catch (err) {
        console.error('API error:', err)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
