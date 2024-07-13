import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const firebaseConfig = config.public.firebaseConfig
  
    const app = initializeApp(firebaseConfig)
  
    if (process.client) {
      getAnalytics(app)
    }
  
    nuxtApp.provide('firebase', app)
})
