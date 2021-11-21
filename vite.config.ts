import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      resolvers: [
        NaiveUiResolver(),
      ],
      dts: true,
    }),

    // https://github.com/antfu/unocss
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          scale: 1.2,
        }),
      ],
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
    port: 3333,
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
