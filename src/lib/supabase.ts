import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    // Vercel integration variables names
    const postgresSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const postgresSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    
    // Si usas la integración directa de Vercel (con el botón "Connect"), 
    // Vercel expone POSTGRES_URL y otras para acceso directo a BD,
    // pero para el SDK de Supabase las inyecta como NEXT_PUBLIC_SUPABASE_URL y KEY.
    
    // Verificamos si tenemos las de Vercel o las manuales
    const finalUrl = postgresSupabaseUrl || supabaseUrl
    const finalKey = postgresSupabaseAnonKey || supabaseAnonKey

    if (!finalUrl) {
        throw new Error('Missing Supabase URL (tried NEXT_PUBLIC_SUPABASE_URL)')
    }

    if (!finalKey) {
        throw new Error('Missing Supabase Anon Key (tried NEXT_PUBLIC_SUPABASE_ANON_KEY)')
    }

    return createClient(finalUrl, finalKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false
        }
    })
}
