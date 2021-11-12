import { SupabaseClient } from '@supabase/supabase-js'
import type { App, InjectionKey } from 'vue'

export interface Params {
  supabaseUrl: string
  supabaseKey: string
  options?: never
}

export interface IVueSupabase {
  install(app: App, params: Params): void
}

export const supabaseInjectionKey: InjectionKey<SupabaseClient> = Symbol('supabase')
