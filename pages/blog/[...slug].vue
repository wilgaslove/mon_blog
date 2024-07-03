<template>

  <NavBlog />
  <div class="mt-[15%] 
  sm:my-[30%] sm:mx-[20%] 
  ">

     <div class="bg-white px-4">
       <ContentDoc v-slot="{doc}" tag="article" :path="path" >
        <!--En-tête du blog-->
        <div class="text-center p-5">
          <h1 class="text-xl font-semibold">{{ doc.title }}</h1>
          <img :src="doc.thumbnail" alt="" class="w-full h-full object-cover pt-[2%]">
        </div>
       
        <p class="text-gray-500 text-sm mt-2">
          {{ doc.date  }}
        </p>
          <!-- Contenu du blog -->
          <ContentRenderer :value="doc" class="content mb-[10%] "/>
       
       
           </ContentDoc>
     </div>
  </div>
  
</template>

<script lang="ts" setup>

const path = useRoute().path;


</script>

<style>
.content p:not(:last-child){
  @apply text-[1.5rem];
}
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
    @apply text-[3rem] font-bold;
}

.content h2 {
    @apply text-[2.5rem] font-bold;
}

.content h3 {
    @apply text-[2rem] font-bold;
}

.content h4 {
    @apply text-[2rem] font-bold;
}

.content h5 {
    @apply text-base font-bold;
}

.lien {
  color: blue
}


</style>