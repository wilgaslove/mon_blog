<template>
  <div>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Tutoriel Menu Responsive avec Burger Animé (HTML, CSS, JAVASCRIPT)</title>
    </head>

    <body>
      <nav class="navbar dark-mode" role="navigation">
        <div class="container container-centered">
          <ul class="navbar__links fixed top-6
          lg:left-[2%] lg:overflow-auto touch-auto lg:touch-auto 

           xl:left-[10%] 2xl:left-[22%]">
           <li class="navbar__link first"><a class="navbarre"><NuxtLink to="/">Accueil</NuxtLink></a></li>
           <li class="navbar__link second"><a class="navbarre"><NuxtLink to="principalebenin">Bénin</NuxtLink></a></li>
           <li class="navbar__link third"><a class="navbarre"><NuxtLink to="/blog">Technologie & Sciences</NuxtLink></a></li>
           <li class="navbar__link four"><a class="navbarre"><NuxtLink to="/politique">Politique</NuxtLink></a></li>
           <li class="navbar__link fifth"><a class="navbarre"><NuxtLink to="/culture">Culture</NuxtLink></a></li>
           <li class="navbar__link six"><a class="navbarre"><NuxtLink to="/literature">Littérature</NuxtLink></a></li>
           <li class="navbar__link seven"><a class="navbarre"><NuxtLink to="/histoire">Histoire & Vie</NuxtLink></a></li>
           <li class="navbar__link eight"><a class="navbarre"><NuxtLink to="/amour">Amour & Conseil</NuxtLink></a></li>
           <li class="navbar__link nine"><a class="navbarre"><NuxtLink to="/sport">Sport</NuxtLink></a></li>
         </ul>
          <button class="burger ">
            <span class="bar "></span>
          </button>
        </div>
      </nav>
    </body>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');

  if (burger && navbar) {
    burger.addEventListener('click', (e) => {
      navbar.classList.toggle('show-nav');
    });

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
      });
    });
  }
}

onMounted(() => {
  toggleMenu();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap');

:root {
  --font-size: 1rem;
}

.dark-mode {
  --navbar-color: #FFF;
  --navbar-bg-color: #000;
}

* {
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  margin-bottom: 2rem;
}

body {
  margin: 0;
  font-size: var(--font-size);
  font-family: 'Poppins', sans-serif;
}
.main-content {
  padding: 1rem;
}

.navbar {
  display: flex;
  justify-content: center;
  background: var(--navbar-bg-color);
  color: var(--navbar-color);
  height: 4rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}

.container-centered {
  margin-top: 30px;
  margin-inline: auto;
  max-width: 1000px;
  padding: 0  20px;
  scroll-behavior: auto;
}

.navbar__links {
  display: flex;
  white-space: nowrap; /* Empêche les éléments de retourner à la ligne */
}

.navbar__link {
  padding: 0 10px;
  flex-shrink: 0; /* Empêche les éléments de se réduire */
}

.navbar__link > .navbarre {
  color: var(--navbar-color);
  text-decoration: none;
}

.burger {
  display: none;
}



</style>
