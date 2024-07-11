<template>
  <div class="container">
    <header class="relative">
      <div class="scroll-container sm:hidden">
        <ul class="header flex justify-between fixed top-0 left-0 right-0 bg-[#bbb] text-lg text-white py-5 px-4 shadow-md">
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
      <div class="sm:flex sm:justify-between fixed top-0 left-0 right-0 bg-[#bbb] text-lg text-white py-5 px-4 shadow-md">
        <button v-if="!menuOpen" @click="toggleMenu" class="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          <Icon name="streamline:interface-setting-menu-1-button-parallel-horizontal-lines-menu-navigation-three-hamburger" />
        </button>
        <ul v-if="menuOpen" class="header flex flex-col sm:flex sm:flex-col md:flex md:flex-row">
          <li><NuxtLink to="/" @click="toggleMenu">Accueil</NuxtLink></li>
          <li><NuxtLink to="/principalebenin" @click="toggleMenu">Bénin</NuxtLink></li>
          <li><NuxtLink to="/blog" @click="toggleMenu">Technologie & Sciences</NuxtLink></li>
          <li><NuxtLink to="/politique" @click="toggleMenu">Politique</NuxtLink></li>
          <li><NuxtLink to="/culture" @click="toggleMenu">Culture</NuxtLink></li>
          <li><NuxtLink to="/literature" @click="toggleMenu">Litérature</NuxtLink></li>
          <li><NuxtLink to="/histoire" @click="toggleMenu">Histore & Vie</NuxtLink></li>
          <li><NuxtLink to="/amour" @click="toggleMenu">Amour & Conseil</NuxtLink></li>
          <li><NuxtLink to="/sport" @click="toggleMenu">Sport</NuxtLink></li>
        </ul>
      </div>
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style scoped>
.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.scroll-container li {
  margin-inline: 2px;
  padding-inline: 5px;
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
