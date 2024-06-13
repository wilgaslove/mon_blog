<template>
  <div>
      {{ route }}

     <ContentDoc path="/blog/hello-world"> <!-- Balise pour voir les blog disponible -->
      
      <template #not-found>
        <div>
          <p>😭 Aucun blog trouvé...</p>

        </div>
      
      </template>
    </ContentDoc> 
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
console.log(route.path);


</script>

<style>

</style>