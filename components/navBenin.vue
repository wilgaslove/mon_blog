<template>
  <div>
    <header class="relative">
      <ul class="flex justify-between fixed top-0 left-0 right-0  bg-[#bbb] text-lg text-white py-5 px-4 shadow-md">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/benin/emploi">Emploi</NuxtLink></li>
        <li><NuxtLink to="/benin/politique">Politique</NuxtLink></li>
        <li><NuxtLink to="/benin/finance">Finances</NuxtLink></li>
        <li><NuxtLink to="/benin/immobilier">Immobilier</NuxtLink></li>
        <li><NuxtLink to="/benin/economie">Economie</NuxtLink></li>
        <li><NuxtLink to="/benin/transport">Transport</NuxtLink></li>
        <li><NuxtLink to="/principalebenin">Bénin</NuxtLink></li>
      </ul>
   </header>
  </div>
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