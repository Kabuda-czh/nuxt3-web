import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 需要安装 TypeScript Vue Plugin (Volar) 在Vscode中, 如果没有则下面的设置不需要
  typescript: {
    shim: false,
    strict: true,
  },
  css: ["vuetify/lib/styles/main.sass"],
  buildModules: [
    // pinia plugin - https://pinia.esm.dev
    "@pinia/nuxt",
  ],
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: ["vue", "pinia"],
    },
    define: {
      "process.env.DEBUG": "false",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  meta: {},
})
