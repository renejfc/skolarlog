<template>
  <n-layout-content>
    <n-space vertical align="center">
      <p class="mt-10 font-medium">
        Ooops, wrong place.
      </p>
      <router-link :to="{ name: '_home' }">
        <p class="i-carbon-arrow-left animate-head-shake animate-duration-3000" />
      </router-link>
    </n-space>
  </n-layout-content>
</template>

<style>

</style>
