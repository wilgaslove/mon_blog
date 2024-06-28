<template>
  <div class="relative ">
    <div class="copyright flex justify-between fixed bottom-0 left-[20%] right-[20%]  bg-black text-lg text-white py-5 px-4 shadow-md  ">
      &copy; {{ new Date().getFullYear() }} Wilgas ADJOVI. Tous droits réservés.
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>