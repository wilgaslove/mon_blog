<template>
  <div class="relavite">
    <div class="copyright flex justify-center   fixed bottom-0 text-center text-lg text-black py-4 border-2 rounded- bg-[#cbd5e1]
    sm:right-0 sm:left-0 sm:text-center sm:mx-auto  sm:block sm:flex sm:flex-col
    md:right-0 md:left-0 md:text-center md:mx-auto  md:block md:flex md:flex-col
    lg:right-10 lg:left-10 lg:text-center lg:mx-auto  lg:block lg:flex lg:flex-col
    xl:right-[25%] xl:left-[25%]  xl:text-center xl:mx-auto  xl:block xl:flex xl:flex-col
    2xl:right-[25%] 2xl:left-[25%]  2xl:text-center 2xl:mx-auto  2xl:block 2xl:flex 2xl:flex-col
    
    ">

      <wilgas class="flex justify-evenly w-[18%] sm
      sm:mx-auto 
      md:mx-auto
      lg:mx-auto
      2xl:mx-auto
      ">
        <a href="https://github.com/wilgaslove" >
          <Icon name="mdi:github"  />
        </a>
        <a href="https://wa.me/22995479236" >
          <Icon name="logos:whatsapp-icon" />
        </a>
        <a href="https://web.telegram.org/a/#6296504337" >
          <Icon name="logos:telegram" />
        </a>
        <!-- <a href="" >
          <Icon name="bi:twitter-x" />
        </a> -->
      </wilgas>
      <span class="mr-4">&copy; {{ new Date().getFullYear() }} Wilgas ADJOVI. Tous droits réservés.</span>


    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.sm a {
margin-inline: 8px;
}

</style>