<template>
  <div>

     <ContentDoc v-slot="{doc}" tag="article" :path="path" class="bg-white"> 

      <!--En-tête du blog-->
      <div class="text-center p-5">
        <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
        <img :src="doc.thumbnail" alt="" class="w-full h-full object-cover pt-[2%]">
      </div>
        
      <p class="text-gray-500 text-sm mt-2">
        {{ doc.date  }}
      </p>
        <!-- Contenu du blog -->
        <ContentRenderer :value="doc" class="content mb-[10%]"/>
        
        

      <footer class="flex justify-between fixed bottom-0 left-0 right-0  bg-black text-lg text-white py-5 px-4 shadow-md">
      </footer>
    </ContentDoc> 
  </div>
  <PubliciteDroite />
   <PubliciteGauch/>
</template>

<script lang="ts" setup>

const path = useRoute().path;


</script>

<style>

.content p:not(:last-child),
.content li:not(:last-child),
.content blockquote:not(:last-child),
.content h1:not(:last-child),
.content h2:not(:last-child),
.content h3:not(:last-child),
.content h4:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  @apply mb-4;
  }

  .article {
    margin-top: 5rem;
  }
  
.content h1 {
    @apply text-3xl font-bold;
}

.content h2 {
    @apply text-2xl font-bold;
}

.content h3 {
    @apply text-xl font-bold;
}

.content h4 {
    @apply text-lg font-bold;
}

.content h5 {
    @apply text-base font-bold;
}
</style>