<template>
  <div>
    <header class="fixed top-0 
      sm:left-[0%]  sm:right-[0%]
      md:left-[0%]  md:right-[0%]
      left-[15%] right-[15%] bg-[#bbb] shadow-md overflow-x-auto">
    <ul class="flex whitespace-nowrap text-lg text-white py-5 px-4  mx-[9%]
        sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0">
      <li class="mx-2"><NuxtLink to="/">Accueil</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/benin/emploi">Emploi</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/benin/politique">Politique</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/benin/finance">Finances</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/benin/immobilier">Immobilier</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/benin/economie">Economie</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/benin/transport">Transport</NuxtLink></li>
      <li class="mx-2"><NuxtLink to="/principalebenin">Bénin</NuxtLink></li>
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

.navb li {
  margin-right: 2px;
  padding-inline: 2px;
}
</style>