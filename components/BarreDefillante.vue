<template>
  <!-- Utilisation du module marquee de nuxt: npx nuxi@latest module add marquee -->
  <div class="barrdefillante">
    <marquee behavior="scroll" direction="left" class="text-black bg-white marquee fixed top-[7%] left-0 right-0 py-4 text-lg  font-bold" style="width: 100vw;">
      <p>Wilgas ADJOVI entrepreneur, blogueur et développeur;  vous invite à rejoindre son équipe pour des aventures fabuleuses. Contact : (+229) 95-47-92-36.</p>

      <p>Dr Love en promotion sur PC neufs et occasion à l'atat neuf. Contact : (+229) 95-47-92-36.</p>

      <p>Highfive University est l'une des meilleures écoles de codage au Bénin, formant les élites d'aujourd'hui et de demain ! Rejoignez-nous pour un avenir garanti. Contact : (+229) 33-33-33-33.</p>

      <p>Date de début des inscriptions : 1er juillet 2024. Date de démarrage du concours : 15 août 2024.</p>
      
      <p>Vente flash d'ordinateurs neufs chez le groupe Soldat-du-Christ du 1er au 15 juillet 2024. Contact : (+229) 95-47-92-36.</p>


      <p>Nous vous invitons à célébrer Dieu lors de nos deux cultes de louange et d'adoration dimanche prochain, de 7h à 9h45 et de 9h45 à 12h45.</p>
      
    </marquee>
  </div>

  <div class="absolute defillantephoto">
    <marquee behavior="scroll" direction="left" class="text-black  marquee fixed font-bold  fixed bottom-[8%]  left-[80%]    text-lg text-white   h-[30%] w-[20%]" >
      <img src="~/assets/img/highfive.png" alt="image 1" class=" object-cover imge w-full h-full">
      <img src="~/assets/img/837410799363001719421757.jpeg" alt="image 2" class=" object-cover imge w-full h-full">
      <img src="~/assets/img/jad20230222-gfbenin-ouverture-1.webp" alt="image 3" class=" object-cover imge w-full h-full">
      
    </marquee>
  </div>
</template>

<style>
/* Affiche les paragraphes en ligne */
marquee p {
  display: inline-block;
  margin-right: 4rem;
}

.imge {
  display: inline-block;
  margin-right: 2rem;
  
}
</style>
