import type { IVueSupabase } from '~/logic/Supabase/plugin'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $supabase: IVueSupabase
  }
}
