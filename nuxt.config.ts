// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public:{

    }
  },
  tailwindcss:{
    configPath: "tailwind.config.ts"
  },
css:[
  "/assets/css/custom.css"
],

  
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
  
  plugins: [
    { src: '~/plugins/vue-carousel.js', mode: 'client' }
  ]
})
