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
          <ul class="navbar__links">
            <li class="navbar__link first"><NuxtLink class="navbarre" to="/">Accueil</NuxtLink></li>
            <li class="navbar__link second"><NuxtLink class="navbarre" to="/principalebenin">Bénin</NuxtLink></li>
            <li class="navbar__link third"><NuxtLink class="navbarre" to="/blog">Technologie & Sciences</NuxtLink></li>
            <li class="navbar__link four"><NuxtLink class="navbarre" to="/politique">Politique</NuxtLink></li>
            <li class="navbar__link fifth"><NuxtLink class="navbarre" to="/culture">Culture</NuxtLink></li>
            <li class="navbar__link sixth"><NuxtLink class="navbarre" to="/literature">Littérature</NuxtLink></li>
            <li class="navbar__link seventh"><NuxtLink class="navbarre" to="/histoire">Histoire & Vie</NuxtLink></li>
            <li class="navbar__link eighth"><NuxtLink class="navbarre" to="/amour">Amour & Conseil</NuxtLink></li>
            <li class="navbar__link ninth"><NuxtLink class="navbarre" to="/sport">Sport</NuxtLink></li>
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

/* Styles pour les écrans de petite taille (sm) */
@screen sm {
  .navbar__links {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 0;
    height: calc(100vh - 65px);
    position: absolute;
    top: 65px;
    right: 0;
    background: var(--navbar-bg-color);
    transform: translateX(110%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__links {
    width: 100vw;
    transform: translateX(0);
  }

  .navbar__link {
    transform: translateX(101%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__link {
    transform: translateX(0);
  }

  .navbar__link > .navbarre {
    display: block;
    padding: 0.75rem;
    font-size: 1.6rem;
    color: var(--navbar-color);
    transition: all .4s ease-in-out;
  }

  .navbar__link > .navbarre:hover {
    padding-left: 2rem;
    letter-spacing: 5px;
  }

  .burger {
    display: block;
    position: relative;
    padding: 0;
    width: 45px;
    height: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .bar {
    position: fixed;
    left: 15px;
    top: 25px;
    display: block;
    width: 45px;
    height: 4px;
    border-radius: 3px;
    background: var(--navbar-color);
    transition: all .5s ease-in-out;
  }

  .bar::before, .bar::after {
    content: "";
    width: 45px;
    height: 4px;
    position: absolute;
    left: 0;
    background: var(--navbar-color);
    border-radius: 3px;
    transition: all .5s ease-in-out;
  }

  .bar::before {
    transform: translateY(-12px);
  }

  .bar::after {
    transform: translateY(12px);
  }

  .show-nav .bar {
    width: 0;
    background: transparent;
  }

  .show-nav .bar::before {
    transform: rotate(45deg);
  }

  .show-nav .bar::after {
    transform: rotate(-45deg);
  }

  .show-nav .first {
    transition: all 1s ease-out;
  }

  .show-nav .second {
    transition: all 1.1s ease-out;
  }

  .show-nav .third {
    transition: all 1.2s ease-out;
  }

  .show-nav .four {
    transition: all 1.3s ease-out;
  }

  .show-nav .fifth {
    transition: all 1.4s ease-out;
  }

  .show-nav .six {
    transition: all 1.5s ease-out;
  }

  .show-nav .seven {
    transition: all 1.6s ease-out;
  }

  .show-nav .eight {
    transition: all 1.7s ease-out;
  }

  .show-nav .nine {
    transition: all 1.8s ease-out;
  }
}

/* Styles pour les écrans de taille moyenne (md) */
@screen md {
  .navbar__links {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 0;
    height: calc(100vh - 65px);
    position: absolute;
    top: 65px;
    right: 0;
    background: var(--navbar-bg-color);
    transform: translateX(110%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__links {
    width: 100vw;
    transform: translateX(0);
  }

  .navbar__link {
    transform: translateX(101%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__link {
    transform: translateX(0);
  }

  .navbar__link > .navbarre {
    display: block;
    padding: 0.75rem;
    font-size: 1.6rem;
    color: var(--navbar-color);
    transition: all .4s ease-in-out;
  }

  .navbar__link > .navbarre:hover {
    padding-left: 2rem;
    letter-spacing: 5px;
  }

  .burger {
    display: block;
    position: relative;
    padding: 0;
    width: 45px;
    height: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .bar {
    position: fixed;
    left: 15px;
    top: 25px;
    display: block;
    width: 45px;
    height: 4px;
    border-radius: 3px;
    background: var(--navbar-color);
    transition: all .5s ease-in-out;
  }

  .bar::before, .bar::after {
    content: "";
    width: 45px;
    height: 4px;
    position: absolute;
    left: 0;
    background: var(--navbar-color);
    border-radius: 3px;
    transition: all .5s ease-in-out;
  }

  .bar::before {
    transform: translateY(-12px);
  }

  .bar::after {
    transform: translateY(12px);
  }

  .show-nav .bar {
    width: 0;
    background: transparent;
  }

  .show-nav .bar::before {
    transform: rotate(45deg);
  }

  .show-nav .bar::after {
    transform: rotate(-45deg);
  }

  .show-nav .first {
    transition: all 1s ease-out;
  }

  .show-nav .second {
    transition: all 1.1s ease-out;
  }

  .show-nav .third {
    transition: all 1.2s ease-out;
  }

  .show-nav .four {
    transition: all 1.3s ease-out;
  }

  .show-nav .fifth {
    transition: all 1.4s ease-out;
  }

  .show-nav .six {
    transition: all 1.5s ease-out;
  }

  .show-nav .seven {
    transition: all 1.6s ease-out;
  }

  .show-nav .eight {
    transition: all 1.7s ease-out;
  }

  .show-nav .nine {
    transition: all 1.8s ease-out;
  }
}

/* Styles pour les écrans larges (lg) */
@screen lg {
  .navbar__link > .navbarre::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: var(--navbar-color);
    transition: width .4s;
  }

  
  
  .navbar__link:hover > .navbarre::after {
    width: 100%;
  }
}

/* Styles pour les écrans très larges (xl) */
@screen xl {
  .navbar__link > .navbarre::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: var(--navbar-color);
    transition: width .4s;
  }
  
  .navbar__link:hover > .navbarre::after {
    width: 100%;
  }
}

/* Styles pour les écrans ultra larges (2xl) */
@screen 2xl {
  .navbar__link > .navbarre::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: var(--navbar-color);
    transition: width .4s;
  }
  
  .navbar__link:hover > .navbarre::after {
    width: 100%;
  }
}
</style>
