<template>
  <div>
    <ContentList path="/benin" :query="query">
      <template #default="{list}">
        <div class="mt-[12%]">
          <div v-for="(benin, index) in list" :key="index">
            <div class="h-[320px]">
              <img :src="benin.thumbnail" alt="">
            </div>
            <h2 class="font-bold text-2xl">
              <<NuxtLink :to="'/benin' +benin.slug">{{ benin.title }}</NuxtLink>
            </h2>
            <p v-if="benin.description">{{ benin.description }}</p>
            <p>{{ formatDate(benin.date) }}</p>
          </div>
        </div>
      
      </template>
    </ContentList>
    
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  path: '/benin',
  sort: [{date: 1}]
}

function formatDate(date:string) {
  return useDateFormat(date, "YYY-MM-DD");
}
</script>

<style>

</style>