<template>
  <div class="container">
    <header >
      <div class="fixed top-0 
      sm:left-[0%]  sm:right-[0%] 
      md:left-[0%]  md:right-[0%]
      
      left-[15%] right-[15%] bg-[#bbb] shadow-md overflow-x-auto">
        <ul class="flex whitespace-nowrap text-lg text-white py-5 px-4  mx-[9%]
        sm:ml-0  md:ml-0 lg:ml-0 xl:ml-0 sm:pr-6 md:pr-6 lg:pr-6 ">
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
  margin-inline: 2px;
  border: 1px;
  border-radius: 12px;
  padding-inline: 1%;
  background-color: rgb(100, 100, 218);
}

li:hover {
  background-color: rgb(91, 91, 247);
}
</style>
