<template>
  <div>

     <ContentDoc :path="path"> 
      <template #not-found>
        <div>
          <p>😭 Aucun blog trouvé...</p>

        </div>
      
      </template>
    </ContentDoc> 
  </div>
</template>

<script lang="ts" setup>
const path = useRoute().path;


</script>

<style>

</style>