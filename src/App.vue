<script setup lang="ts">
import { useTheme } from '~logic/Shared/composables'

const { externalUITheme, isDark } = useTheme()
</script>

<template>
  <n-config-provider :theme="externalUITheme">
    <n-layout
      has-sider
      :bordered="!isDark"
      class="text-base font-sans"
    >
      <sider />
      <n-layout class="p-8">
        <router-view />
      </n-layout>
      <toggle-theme />
    </n-layout>
  </n-config-provider>
</template>
