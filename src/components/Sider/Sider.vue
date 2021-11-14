<script setup lang="ts">
import { SiderItems } from '~/components/Sider/Sider.data'
import { useTheme } from '~/logic/Shared/composables/theme'

const { isDark } = useTheme()
</script>

<template>
  <n-layout-sider
    show-trigger="bar"
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :native-scrollbar="false"
    :default-collapsed="true"
    :bordered="!isDark"
    class="min-h-screen"
  >
    <n-menu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="SiderItems"
    />
  </n-layout-sider>
  <register-icons v-if="false" />
</template>
