<template>
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
const path = useRoute().path;

</script>

<style>

</style>