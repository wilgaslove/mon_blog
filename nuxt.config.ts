// import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      firebaseConfig: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID",
        measurementId: "YOUR_MEASUREMENT_ID"
      }
    }
  },
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
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  plugins: [
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
    { src: '~/plugins/firebase.client.ts', mode: 'client' }
  ],
  nitro: {
    preset: 'firebase'
  }
})
