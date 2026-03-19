import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl) {
        throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL')
    }

    // Usamos Service Role Key (Admin) si existe para ignorar RLS en el servidor.
    // Solo usamos Anon Key como respaldo.
    const key = serviceRoleKey || supabaseAnonKey

    if (!key) {
        throw new Error('Missing Supabase Auth Key (Anon or Service Role)')
    }

    return createClient(supabaseUrl, key, {
        auth: {
            persistSession: false,
            autoRefreshToken: false
        }
    })
}
