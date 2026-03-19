import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Missing Supabase environment variables')
    }

    // Usamos Service Role Key si está disponible para saltar RLS en el lado del servidor
    // Si no, caemos en la anon key
    const key = serviceRoleKey || supabaseAnonKey

    return createClient(supabaseUrl, key, {
        auth: {
            persistSession: false,
            autoRefreshToken: false
        }
    })
}
