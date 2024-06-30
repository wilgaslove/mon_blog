<template>
  <div class="relavite">
    <div class="copyright flex justify-center   fixed bottom-0 left-[20%] right-[20%] text-center text-lg text-black py-4 border-2 rounded- bg-[#cbd5e1] ">
      <span class="mr-4">&copy; {{ new Date().getFullYear() }} Wilgas ADJOVI. Tous droits réservés.</span>

      <wilgas class="flex justify-evenly w-[18%]">
        <a href="https://github.com/wilgaslove" >
          <Icon name="mdi:github"  />
        </a>
        <a href="" >
          <Icon name="logos:whatsapp-icon" />
        </a>
        <a href="https://web.telegram.org/a/#6296504337" >
          <Icon name="logos:telegram" />
        </a>
        <a href="" >
          <Icon name="bi:twitter-x" />
        </a>
      </wilgas>

    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>