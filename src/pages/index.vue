<script setup lang="ts">
import { useTheme } from '~/composables'

const { isDark, themeShift } = useTheme()
</script>

<template>
  <div>
    <n-button @click="themeShift()">
      <span v-if="isDark" i-carbon-moon />
      <span v-else i-carbon-sun />
    </n-button>
  </div>
</template>
