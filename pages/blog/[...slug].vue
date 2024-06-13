<template>
  <div>
      {{ route }}

     <!-- <ContentDoc :path="path"> 
      <template #not-found>
        <div>
          <p>😭 Aucun blog trouvé...</p>

        </div>
      
      </template>
    </ContentDoc>  -->
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();


</script>

<style>

</style>