<template>
  <div>

     <ContentDoc v-slot="{doc}" tag="article" :path="path"> 

      <!--En-tête du blog-->
      <div class="text-center p-5">
        <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
        <p class="text-gray-500 text-sm mt-2">
          {{ doc.date  }}
        </p>
        <img :src="doc.thumbnail" alt="" class="w-full h-full object-cover">
      </div>

      <!-- Contenu du blog -->
       <ContentRenderer :value="doc" />



      <!-- <template #not-found>
        <div>
          <p>😭 Aucun blog trouvé...</p>

        </div>
      
      </template> -->
    </ContentDoc> 
  </div>
</template>

<script lang="ts" setup>
const path = useRoute().path;


</script>

<style>

</style>