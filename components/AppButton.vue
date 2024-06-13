<template>
  <button class="border shadow-md">
    <div class="felx gap-2">
      <slot name="icon"/>
      <slot />   <!-- Slot par défaut-->   
    </div>
  </button>
</template>

<script lang="ts" setup>

</script>

<style>

</style>