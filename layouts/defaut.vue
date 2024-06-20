<template>
  <div>
    <header class="relative">
      <ul class="flex justify-between fixed top-0 left-0 right-0  bg-black text-lg text-white py-5 px-4 shadow-md">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/blog">Technologie & Sciences</NuxtLink></li>
        <li><NuxtLink to="/blog/politique">Politique</NuxtLink></li>
        <li><NuxtLink to="/blog/culture">Culture</NuxtLink></li>
        <li><NuxtLink to="/blog/litérature">Litérature</NuxtLink></li>
        <li><NuxtLink to="/blog/international">International</NuxtLink></li>
        <li><NuxtLink to="/blog/transport">Transport</NuxtLink></li>
        <li><NuxtLink to="/blog/sport">Sport</NuxtLink></li>
        <li><NuxtLink to="/benin">Bénin</NuxtLink></li>
      </ul>
   </header>
    <slot />
  </div>
  <footer class="flex justify-between fixed bottom-0 left-0 right-0  bg-black text-lg text-white py-5 px-4 shadow-md">

  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
li{
  border: 1px;
  border-radius: 12px;
  padding-inline: 1%;
  background-color: rgb(100, 100, 218);
}
li:hover {
  /* transition-delay: 1ms; */
  background-color: rgb(91, 91, 247);
  
}
 
</style>