import { inject } from 'vue'
import { SupabaseClient } from '@supabase/supabase-js'
import { supabaseInjectionKey } from '~logic/Supabase/supabase.types'

export function useSupabase(): SupabaseClient {
  return inject(supabaseInjectionKey)!
}
