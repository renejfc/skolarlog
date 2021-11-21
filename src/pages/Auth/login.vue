<script setup lang="ts">
import { useAutoComplete } from '~/logic/Auth/composables/autoComplete'
import { useLogin } from '~/logic/Auth/composables/login'

const {
  rules,
  model: loginModel,
  handleValidate,
} = useLogin()

const loginRef = ref<HTMLElement | null>(null)
const { autoEmailOptions, getShow } = useAutoComplete()
</script>

<template>
  <div class="flex justify-center">
    <n-card hoverable class="max-w-screen-sm mt-44" title="Identificación">
      <template #header-extra>
        <span class="i-carbon-locked" />
      </template>
      <n-form ref="loginRef" :model="loginModel" :rules="rules">
        <n-form-item path="email" label="Email">
          <n-auto-complete
            v-model:value="loginModel.email"
            :options="autoEmailOptions(loginModel.email)"
            clearable
            autofocus
            type="text"
            placeholder="Ej. nixys.lord@protonmail.com"
            required
            :get-show="getShow(loginModel.email)"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item path="password" label="Constraseña">
          <n-input
            v-model:value="loginModel.password"
            type="password"
            show-password-on="mousedown"
            :maxlength="50"
            placeholder="Ej. qwertY_l0rd$"
            required
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-form>
      <template #action>
        <div class="flex justify-center">
          <n-button
            type="primary"
            block
            class="text-black max-w-96 dark:text-gray-300"
            size="large"
            @click="(e) => handleValidate(e, loginRef)"
          >
            <span class="i-carbon-unlocked mr-1" />
            Entrar
          </n-button>
        </div>
      </template>
    </n-card>
  </div>
</template>
