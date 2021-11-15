<script setup lang="ts">
import { useLogin } from '~/logic/Auth/composables/login'

const {
  rules,
  model: loginModel,
  handleValidate,
} = useLogin()

const loginRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="flex justify-center">
    <n-card hoverable class="max-w-screen-sm mt-20">
      <n-tabs
        default-value="signin"
        size="large"
      >
        <n-tab-pane
          name="signin"
          tab="Entrar"
        >
          <n-form ref="loginRef" :model="loginModel" :rules="rules">
            <n-form-item path="email" label="Email">
              <n-input
                v-model:value="loginModel.email"
                clearable
                autofocus
                type="text"
                placeholder="Ej. Nixyslord"
                required
                @keydown.enter.prevent
              />
            </n-form-item>
            <n-form-item path="password" label="Constraseña">
              <n-input
                v-model:value="loginModel.password"
                type="password"
                show-password-on="mousedown"
                :maxlength="10"
                placeholder="Ej. Qwerty_123-password"
                required
                @keydown.enter.prevent
              />
            </n-form-item>
          </n-form>
          <n-button
            type="primary"
            block
            class="text-black dark:text-gray-300"
            @click="(e) => handleValidate(e, loginRef)"
          >
            Identificarse
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="Registrarse" disabled>
          <n-form>
            <n-form-item label="Usuario">
              <n-input clearable />
            </n-form-item>
            <n-form-item label="Constraseña">
              <n-input show-password-on="mousedown" />
            </n-form-item>
            <n-form-item label="Confirmar Constraseña">
              <n-input />
            </n-form-item>
          </n-form>
          <n-button
            type="primary"
            block
            class="text-black dark:text-gray-300"
          >
            Registrarse
          </n-button>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>
