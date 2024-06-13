<template>
  <div>
    <ContentList path="/blog">
       <template #default="{list}">
        <!-- <p>{{ list }}</p> -->
        <div v-for="(blog, index) in list" :key="index" class="bg-white shodow-md round-2xl">
          <h2 class="font-bold text-2xl">{{ blog.title }}</h2>
          <p v-if="blog.description">{{ blog.description }}</p>
          <p>{{ blog.date }}</p>
        </div>
      
       </template>

       <template #not-found>
        <p>Aucun article trouvé</p>
       </template>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
import {  } from "module";


</script>

<style>

</style>