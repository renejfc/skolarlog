<script setup lang="ts">
import { useTheme } from '~/logic/Shared/composables'

const { themeShift, isDark } = useTheme()

</script>

<template>
  <n-button
    circle
    size="large"
    dashed
    class="absolute right-8 top-6 z-50"
    @click="themeShift()"
  >
    <span :class=" isDark ? 'i-carbon-moon' : 'i-carbon-sun'" />
  </n-button>
</template>

<style scoped lang="css"></style>
