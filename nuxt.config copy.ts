// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // Assurez-vous que SSR (Server-Side Rendering) est activé si nécessaire
  // ssr: true,

  tailwindcss: {
    configPath: "tailwind.config.ts"
  },

  css: [
    "/assets/css/custom.css"
  ],

  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-marquee",
    "@nuxt/icon",
    "@formkit/auto-animate"
  ],

  // nitro: {
  //   preset: 'render' // Assurez-vous que Nitro est configuré pour Render
  // },

})