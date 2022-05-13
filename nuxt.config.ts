import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 需要安装 TypeScript Vue Plugin (Volar) 在Vscode中, 如果没有则下面的设置不需要
  typescript: {
    shim: false
  },
})
