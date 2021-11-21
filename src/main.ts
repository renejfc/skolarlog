import { createApp } from 'vue'

import App from './App.vue'
import { router } from '~/router/'
import supabase from '~/logic/Supabase/plugin'

import 'uno.css'
import '~/styles/main.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)

const supabaseConfig = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  options: {},
}

app.use(router)
app.use(supabase, supabaseConfig)
app.mount('#app')
