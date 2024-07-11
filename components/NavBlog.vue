<template>
  <div class="container">
    <header class="max-w-[20rem] border-black border-4 bg-red-600">
      <div class="fixed top-0 left-0 right-0 bg-[#bbb] shadow-md overflow-x-auto">
        <ul class="flex justify-center whitespace-nowrap text-lg text-white py-5 px-4 ">
          <li><NuxtLink to="/" >Accueil</NuxtLink></li>
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


</script>

<style scoped>

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
