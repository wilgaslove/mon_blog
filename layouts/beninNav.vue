<template>
  <div class="relative">
    <div>
    <header class="relative">
      <ul class="flex justify-between fixed top-[5rem] left-0 right-0  bg-black text-lg text-white py-5 px-4 shadow-md">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/benin">Technologie & Sciences</NuxtLink></li>
        <li><NuxtLink to="/benin/politique">Politique</NuxtLink></li>
        <li><NuxtLink to="/benin/culture">Culture</NuxtLink></li>
        <li><NuxtLink to="/benin/litérature">Litérature</NuxtLink></li>
        <li><NuxtLink to="/benin/international">International</NuxtLink></li>
        <li><NuxtLink to="/benin/transport">Transport</NuxtLink></li>
        <li><NuxtLink to="/benin/sport">Sport</NuxtLink></li>
        <li><NuxtLink to="/benin">Bénin</NuxtLink></li>
      </ul>
   </header>
   <main>
    <NuxtPage />
   </main>
    <slot />
  </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>