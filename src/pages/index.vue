<script setup lang="ts">
import { useSupabase } from '~/logic/Supabase/composables/supabase'
import { useTheme } from '~logic/Shared/composables'

const { isDark, themeShift } = useTheme()

onMounted(async() => {
  const { data, error } = await useSupabase()
    .from('profiles')
    .select('*')
})
</script>

<template>
  <div>
    <n-button @click="themeShift()">
      <span v-if="isDark" i-carbon-moon />
      <span v-else i-carbon-sun />
    </n-button>
  </div>
</template>
