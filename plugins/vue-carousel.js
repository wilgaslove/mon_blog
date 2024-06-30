import { defineNuxtPlugin } from '#app';
import VueCarousel from '@chenfengyuan/vue-carousel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueCarousel', VueCarousel);
});