<template>

  <NavBlog />
  <div class="mt-[15%] 
  sm:my-[30%] sm:mx-[20%] 
  md:my-[17%] md:mx-[20%]
  ">

     <div class="bg-white px-4">
       <ContentDoc v-slot="{doc}" tag="article" :path="path" >
        <!--En-tête du blog-->
        <div class=" p-5">
          <h1 class="text-xl font-semibold sm:text-[1.5rem] md:text-[2rem]">{{ doc.title }}</h1>
          <img :src="doc.thumbnail" alt="" class="w-full h-full object-cover pt-[2%] md:w-[150%]">
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
.content {
  /* @apply md: */
}
.content p:not(:last-child){
  @apply text-[1.5rem] sm:text-[1rem] md:text-[1.3rem];
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
    @apply text-[3rem] font-bold sm:text-[1.5rem] md:text-[1.7rem];
   
}

.content h2 {
    @apply text-[2.5rem] font-bold sm:text-[1.25rem] md:text-[1.5rem];
}

.content h3 {
    @apply text-[2rem] font-bold sm:text-[1rem] md:text-[1.2rem] ;
}

.content h4 {
    @apply text-[2rem] font-bold sm:text-[0.75rem] md:text-[0.8rem];
}

.content h5 {
    @apply text-base font-bold sm:text-[0.70rem] md:text-[0.75rem];
}

.lien {
  color: blue
}


</style>