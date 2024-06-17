<template>
  <div>
    <header class="relative">
      <ul class="flex my-8  justify-between fixed top-2 left-0 right-0">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/blog">Voir mon blog</NuxtLink></li>
        <li><NuxtLink to="/blog/benin">Bénin</NuxtLink></li>
        <li><NuxtLink to="">Politique</NuxtLink></li>
        <li><NuxtLink to="">Culture</NuxtLink></li>
        <li><NuxtLink to="">Litérature</NuxtLink></li>
        <li><NuxtLink to="">nternational</NuxtLink></li>
        <li><NuxtLink to="">Transport</NuxtLink></li>
        <li><NuxtLink to="">Sport</NuxtLink></li>
      </ul>
   </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>