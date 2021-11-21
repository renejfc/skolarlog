<script setup lang="ts">
import { SiderItems } from '~/components/Sider/Sider.data'
import { useTheme } from '~/logic/Shared/composables/theme'

const { isDark } = useTheme()
const isMediumScreen = useMediaQuery('(max-width: 1024px)')
const isSmallScreen = useMediaQuery('(max-width: 768px)')
</script>

<template>
  <n-layout-sider
    v-if="!isMediumScreen"
    show-trigger="bar"
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :native-scrollbar="false"
    :bordered="!isDark"
    class="h-screen"
  >
    <n-menu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="SiderItems"
      class="text-base"
    />
  </n-layout-sider>
  <n-layout-sider
    v-if="isMediumScreen && !isSmallScreen"
    show-trigger="bar"
    collapse-mode="width"
    :collapsed-width="64"
    :width="200"
    :native-scrollbar="false"
    :default-collapsed="true"
    :bordered="!isDark"
    class="h-screen"
  >
    <n-menu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="SiderItems"
      class="text-base"
    />
  </n-layout-sider>
  <n-layout-sider
    v-if="isSmallScreen"
    show-trigger="arrow-circle"
    collapse-mode="transform"
    :collapsed-width="15"
    width="96%"
    :native-scrollbar="false"
    :default-collapsed="true"
    :bordered="!isDark"
    class="h-screen fixed flex z-2"
  >
    <n-menu
      :options="SiderItems"
      class="text-base"
    />
  </n-layout-sider>
  <register-icons v-if="false" />
</template>
