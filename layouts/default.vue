<template>
  <div>
    <header>
      <ul class="felx my-8 gap-2">
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/blog">Voir mon blog</NuxtLink></li>
      </ul>
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>