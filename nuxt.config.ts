// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-marquee",
    "@nuxt/icon",
    "@formkit/auto-animate",
    // "@nuxtjs/vuetify",
  ],

  components: [
    { path:'~/components', pathPrefix: false },
  ],
  
})
