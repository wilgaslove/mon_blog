<template>

  <div class="">
    <navBenin />
  </div>

  <div>
    <MarqueeBanner />
  </div>

  <div class="mt-[12%] bg-white test-center">
    <video class="w-full h-[30rem] object-cover" controls>
      <source src="public/img/lebenin.mp4"  type="video/mp4">

    </video>
  </div>
    
    <article class="">
      <h1 class="text-4xl font-bold animate-pulse text-blue-600/100 p-4">Grands Titres de l'Actualité au Bénin</h1> 

      <h2>Économie</h2>

      <h3>Réformes et Investissements</h3>

      <p>Le Bénin poursuit ses efforts de réforme économique avec des initiatives visant à améliorer l'environnement des affaires et à attirer les investisseurs étrangers. Parmi les mesures récentes, la modernisation des infrastructures portuaires et routières figure en tête de liste. Le gouvernement béninois mise également sur la promotion de l'entrepreneuriat local pour stimuler la croissance économique.</p>

      <h2>Politique</h2>

      <h3>Élections Législatives</h3>

      <p>Les récentes élections législatives au Bénin ont marqué un tournant important. La forte participation des citoyens a témoigné de l'engagement démocratique du pays. Le processus électoral s'est déroulé de manière pacifique, permettant d'élire de nouveaux représentants au Parlement. Les élus ont promis de continuer les réformes pour améliorer les conditions de vie des Béninois.</p>

      <h2>Santé</h2>

      <h3>Lutte contre la COVID-19</h3>

      <p>La santé publique reste une priorité avec des efforts continus pour combattre la pandémie de COVID-19. Le gouvernement a intensifié les campagnes de vaccination et mis en place des mesures de prévention pour limiter la propagation du virus. En parallèle, des programmes de sensibilisation sur d'autres maladies comme le paludisme et le VIH/SIDA se poursuivent.</p>

      <h2>Éducation</h2>

      <h3>Réformes Éducatives</h3>

      <p>Le secteur de l'éducation au Bénin connaît des réformes significatives visant à améliorer la qualité de l'enseignement et l'accès à l'éducation pour tous. Le gouvernement a annoncé un plan ambitieux pour la construction de nouvelles écoles et la formation des enseignants. De plus, l'intégration des technologies numériques dans les écoles est en cours pour moderniser le système éducatif.</p>

      <h2>Culture</h2>

      <h3>Festivals et Patrimoine</h3>

      <p>Le Bénin continue de célébrer ses traditions et son patrimoine riche. Des festivals et événements culturels sont régulièrement organisés pour promouvoir la musique, la danse et les arts traditionnels béninois. Le pays est également reconnu pour ses sites historiques, tels que le Palais Royal d'Abomey, inscrit au patrimoine mondial de l'UNESCO.</p>

      <h2>Environnement</h2>

      <h3>Initiatives de Conservation</h3>

      <p>Le Bénin s'engage dans des initiatives de conservation de l'environnement. Des projets de reboisement et de protection des parcs nationaux sont en cours pour préserver la biodiversité du pays. Le gouvernement collabore avec des organisations internationales pour lutter contre le changement climatique et promouvoir le développement durable.</p>

      <h2>Sport</h2>

      <h3>Performances Sportives</h3>

      <p>Le sport au Bénin est en pleine effervescence, notamment avec les performances remarquables des athlètes béninois sur la scène internationale. Le football reste le sport le plus populaire, et l'équipe nationale, les Écureuils, continue de participer à des compétitions africaines et mondiales. Le pays soutient également les jeunes talents dans divers sports pour encourager une pratique sportive diversifiée.</p>

      <p>En somme, l'actualité au Bénin est marquée par des avancées significatives dans divers domaines. Les réformes économiques, les progrès politiques, les efforts en matière de santé et d'éducation, la richesse culturelle, les initiatives environnementales et les succès sportifs illustrent bien le dynamisme et le potentiel du Bénin.</p>
   </article>
 
   <div class="relative">
    <p class="animate-bounce fixed top-[18%] left-5  bg-[#bbb] text-lg text-white py-5 px-4 shadow-md  h-[20%] w-[15%] ">Bonjour la famille</p>
   </div>



   <div class="relative">
    
    <div class=" animate-pulse fixed bottom-[40%] right-2  bg-[#bbb]  text-lg text-white py-5 px-4 shadow-md h-[45%] w-[15%] ">
      <img src="assets/img/highfive.png" alt="" class="object-cover bg[#bbb]" >
      <h1 class="text-2xl font-bold text-blue-600/100 p-4">Highfive University</h1>
      <P class="text-black font-bold" >
        Découvrez l'école de codage <a href="#" class="text-blue-600/100 ">Highfive University</a> ... 
      </P>
    </div>
   </div>
  <FooterBenin />

</template>

<script lang="ts" setup>
import MarqueeBanner from '@/components/MarqueeBanner.vue';
</script>

<style scoped>
h2 {
  margin-block-start: 1rem;
  font-size: 2em;
  font-weight: bold;
}

h3{
  /* margin-block: 0.5rem; */
  font-size: 1.5em;
  font-weight: bold;
}
</style>