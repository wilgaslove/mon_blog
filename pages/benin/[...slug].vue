
<template>
  <NavBenin />
  <div>
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
const route = useRoute();
let path = '/benin';

if (Array.isArray(route.params.slug)) {
  path += `/${route.params.slug.join('/')}`;
} else if (typeof route.params.slug === 'string') {
  path += `/${route.params.slug}`;
}

if (typeof route.params.slug === 'string' && route.params.slug.startsWith('benin')) {
  definePageMeta({
  });
}
</script>



<style>

</style>