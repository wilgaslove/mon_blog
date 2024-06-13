<template>
  <div>
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

</script>

<style>

</style>