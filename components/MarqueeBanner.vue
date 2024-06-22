<template>
 <div class="relative">
   <div class="marquee-container flex justify-between fixed top-[7%] left-0 right-0  bg-black text-lg text-white py-5 px-4 shadow-md">
      <marquee-text :speed="100" :loop="true" :gradient="false">
        <span v-for="(announcement, index) in announcements" :key="index">
          {{ announcement }} 
        </span>
      </marquee-text>
    </div>
 </div>
</template>

<script lang="ts" setup>
import MarqueeText from 'vue-marquee-text-component';

const announcements = ref([
  'Annonce 1: Grande promo fin d\'année...',
  'Annonce 2: La rentrée des classe à Highfive University...',
  'Annonce 3: Promotion spéciale cette semaine...',
  'Annonce 4: Nouveaux produits disponibles...',
  'Annonce 5: Veuillez lire notre dernière mise à jour...'
]);
</script>

<style>
.marquee-container {
  width: 100%;
  overflow: hidden;
  background-color: #f9f9f9;
  padding: 10px 0;
  border: 1px solid #ddd;
}

.marquee-container span {
  font-size: 18px;
  color: #333;
}
</style>