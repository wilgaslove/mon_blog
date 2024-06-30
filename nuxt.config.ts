// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-marquee",
    "@nuxt/icon"
  ],

  components: [
    { path:'~/components', pathPrefix: false },
  ],
  
})