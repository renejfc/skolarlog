import { createClient } from '@supabase/supabase-js'

import { IVueSupabase, supabaseInjectionKey } from '~/logic/Supabase/supabase.types'

export default {
  install(app, params) {
    const { supabaseUrl, supabaseKey, options = {} } = params
    const supabase = createClient(supabaseUrl, supabaseKey, options)

    app.config.globalProperties.$supabase = supabase
    app.provide(supabaseInjectionKey, supabase)
  },
} as IVueSupabase
