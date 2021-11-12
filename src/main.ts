import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from 'virtual:generated-pages'
import '@unocss/reset/tailwind.css'
import App from './App.vue'
import supabase from '~logic/Supabase/plugin'

import './styles/main.css'
import 'uno.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const supabaseConfig = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  options: {},
}

app.use(router)
app.use(supabase, supabaseConfig)
app.mount('#app')
