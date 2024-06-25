<template>
  <NavBenin />
  
  <div>
    <ContentList path="/amour" :query="query">
      <template #default="{list}">
        <div class="mt-[16%]">
          <div v-for="(amour, index) in list" :key="index"  class="bg-white shadow-md round-2xl mb-1 border-2 border-[#aaba]">
            <div class="h-[300px]">
              <img :src="amour.thumbnail" alt="" class="w-full h-full object-cover">
            </div>
            <h2 class="font-bold text-2xl ml-2">
              <NuxtLink v-if="amour._path" :to="'/amour/'  +  amour._path.replace('/amour/', '')">{{ amour.title }}</NuxtLink>
              <span v-else>{{ amour.title }}</span>
            </h2>
            <p v-if="amour.description" class="ml-2" >{{ amour.description }}</p>
            <p class="ml-2" >{{ formatDate(amour.date) }}</p>
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
import { useDateFormat } from '@vueuse/core'

const query: QueryBuilderParams = {
  path: '/amour',
  sort: [{date: 1}]
}

function formatDate(date:string) {
  return useDateFormat(date, "YYYY-MM-DD");
}
</script>

<style>

</style>