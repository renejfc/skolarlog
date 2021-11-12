<script setup lang="ts">
import { useTheme } from '~/composables'

const { externalUITheme } = useTheme()
</script>

<template>
  <main font-sans px-4 py-10 text-center>
    <n-config-provider :theme="externalUITheme">
      <router-view />
    </n-config-provider>
  </main>
</template>
