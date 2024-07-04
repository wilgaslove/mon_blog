<template>
  <div class="container">
    <header class="relative" v-if="!isBeninPage">
      <div class="scroll-container">
        <ul class="header flex justify-between fixed top-0 left-0 right-0 bg-black text-lg text-white py-5 px-4 shadow-md">
          <li><NuxtLink to="/">Accueil</NuxtLink></li>
          <li><NuxtLink to="/principalebenin">Bénin</NuxtLink></li>
          <li><NuxtLink to="/blog">Technologie & Sciences</NuxtLink></li>
          <li><NuxtLink to="/politique">Politique</NuxtLink></li>
          <li><NuxtLink to="/culture">Culture</NuxtLink></li>
          <li><NuxtLink to="/literature">Litérature</NuxtLink></li>
          <li><NuxtLink to="/histoire">Histore & Vie</NuxtLink></li>
          <li><NuxtLink to="/amour">Amour & Conseil</NuxtLink></li>
          <li><NuxtLink to="/sport">Sport</NuxtLink></li>
        </ul>
      </div>
    </header>
    <slot />
  </div>
</template>


<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isBeninPage = route.path.includes('/benin')

</script>

<style scoped>
.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-container li {
  margin-inline: 2px;
  padding-inline: 5px
}

.header {
  display: inline-flex;
  /* Other styles */
}

li {
  display: inline-block;
  border: 1px;
  border-radius: 12px;
  padding-inline: 1%;
  background-color: rgb(100, 100, 218);
}

li:hover {
  background-color: rgb(91, 91, 247);
}
</style>
