// import { defineNuxtConfig } from 'nuxt'

// Configuration de Nuxt
export default defineNuxtConfig({
  ssr: true, // Active le rendu côté serveur (SSR)
 
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
  // composants
  // components: [
  //   { path: '~/components', pathPrefix: false },
  // ],
 
})
