<template>
  <div>
    <ContentList path="/blog"  :query="query">
       <template #default="{list}">
        <div v-for="(blog, index) in list" :key="index" class="bg-white shadow-md round-2xl">
          <div class="h-[320px]">
            <img :src="'~/assets/img' + blog.thumbnail" alt="">
          </div>
          <h2 class="font-bold text-2xl">
            <NuxtLink :to="'/blog/' + blog.slug">{{ blog.title }}</NuxtLink>
          </h2>
          <p v-if="blog.description">{{ blog.description }}</p>
          <p>{{ formatDate(blog.date) }}</p>
        </div>
      
       </template>

       <template #not-found>
        <p>Aucun article trouvé</p>
       </template>
    </ContentList>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { 
  path: '/blog', 
  sort: [{ date: -1 }] 
  // limit: 5,
}

function formatDate(date:string) {
  return useDateFormat(date, "YYY-MM-DD") ;
}

</script>

<style>

</style>