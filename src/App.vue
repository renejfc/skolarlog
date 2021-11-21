<script setup lang="ts">
import { useAuth } from '~/logic/Auth/composables/auth'
import { useTheme } from '~/logic/Shared/composables'
import { store } from '~/logic/Auth/store'

const { externalUITheme, isDark, themeOverrides } = useTheme()
const { currentUserAuth } = useAuth()

onMounted(() => {
  if (currentUserAuth)
    store.userAuth = currentUserAuth
})
</script>

<template>
  <n-config-provider :theme="externalUITheme" :theme-overrides="themeOverrides">
    <n-message-provider placement="bottom-right">
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
    </n-message-provider>
  </n-config-provider>
</template>
