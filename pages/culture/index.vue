<template>
  <NavBlog />
  <div>
    <ContentList path="/culture"  :query="query" >
       <template #default="{list}">
        <div class="mt-[17%] mb-[20%]">
          <div v-for="(culture, index) in list" :key="index" class="bg-white shadow-md round-2xl mb-1 border-2 border-[#aaba] ">
            <div class="h-[320px] ">
              <img :src=" culture.thumbnail" alt="" class="w-full h-full object-cover">
            </div>
            <h2 class="font-bold text-2xl">
              <NuxtLink :to="'/culture/' + culture.slug">{{ culture.title }}</NuxtLink>
            </h2>
            <p v-if="culture.description">{{ culture.description }}</p>
            <p>{{ formatDate(culture.date) }}</p>
          </div>
        </div>
      
       </template>

       <template #not-found>
        <p  class="mt-[50%]">Aucun article trouvé</p>
       </template>
    </ContentList>
  </div>
  
</template>

<script lang="ts" setup>

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { 
  path: '/culture', 
  sort: [{ date: -1 }] 
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