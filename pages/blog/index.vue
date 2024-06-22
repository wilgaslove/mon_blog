<template>
  <div>
    <ContentList path="/blog"  :query="query" >
       <template #default="{list}">
        <div class="mt-[12%]">
          <div v-for="(blog, index) in list" :key="index" class="bg-white shadow-md round-2xl mb-1 border-2 border-[#aaba] ">
            <div class="h-[320px] ">
              <img :src=" blog.thumbnail" alt="" class="w-full h-full object-cover">
            </div>
            <h2 class="font-bold text-2xl">
              <NuxtLink :to="'/blog/' + blog.slug">{{ blog.title }}</NuxtLink>
            </h2>
            <p v-if="blog.description">{{ blog.description }}</p>
            <p>{{ formatDate(blog.date) }}</p>
          </div>
        </div>
      
       </template>

       <template #not-found>
        <p  class="mt-[50%]">Aucun article trouvé</p>
       </template>
    </ContentList>
  </div>
  <PubliciteGauch/>
  <PubliciteDroite />
</template>

<script lang="ts" setup>

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { 
  path: '/blog', 
  sort: [{ date: 1 }] 
  // limit: 5,
}

function formatDate(date:string) {
  return useDateFormat(date, "YYYY-MM-DD") ;
}
</script>

<style>
.article{
  margin-top: 10rem;
}

</style>