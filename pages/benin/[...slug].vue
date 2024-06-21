
<template>
  <NavBenin />
  <div v-if="isCategory">
     <!-- Afficher les articles de la catégorie -->
     <ContentList :path="categoryPath" :query="query">
        <template #default="{ list }">
          <div class="mt-[12%]">
            <div v-for="(benin, index) in list" :key="index" class="bg-white shadow-md round-2xl mb-1 border-2 border-[#aaba]">
              <div class="h-[320px]">
                <img :src="benin.thumbnail" alt="" class="w-full h-full object-cover">
              </div>
              <h2 class="font-bold text-2xl ml-2">
                <NuxtLink v-if="benin._path" :to="'/benin/' + benin._path.replace('/benin/', '')">{{ benin.title }}</NuxtLink>
                <span v-else>{{ benin.title }}</span>
              </h2>
              <p v-if="benin.description" class="ml-2">{{ benin.description }}</p>
              <p class="ml-2">{{ formatDate(benin.date) }}</p>
            </div>
          </div>
          
          <footer
          class="flex justify-between fixed bottom-0 left-0 right-0  bg-black text-lg text-white py-5 px-4 shadow-md">
        </footer>
        </template>

        <template #not-found>
          <p class="mt-[50%]">Aucun article trouvé</p>
        </template>
      </ContentList>
  </div>
  <div v-else>
    <ContentDoc v-slot="{doc}" tag="article" :path="path" class="bg-white">
      <div class="text-center p-5">
        <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
        <img :src="doc.thumbnail" alt="" class="w-full h-full object-cover pt-[2%]">
        </div>
        
        <!-- Contenu du blog -->
        <ContentRenderer :value="doc" class="content"/>


        
        <p class="text-gray-500 text-sm mt-2">
            {{ doc.date  }}
        </p>

      
    </ContentDoc>
  </div>

</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useDateFormat } from '@vueuse/core'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute();

const slug = route.params.slug as string[]
const path = `/benin/${slug.join('/')}`
const isCategory = slug.length === 1 // Si le slug a une longueur de 1, c'est une catégorie

const categoryPath = `/benin/${slug[0]}`
const query: QueryBuilderParams = {
  path: categoryPath,
  sort: [{ date: 1 }]
}

function formatDate(date: string) {
  return useDateFormat(date, "YYYY-MM-DD").value
}

</script>



<style>

</style>