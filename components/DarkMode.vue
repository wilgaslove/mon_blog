<template>
  <div class="relative"> 
    <button @click="toggleDarkMode" class="fixed top-[18%] right-0 shadow-md p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value.toString()); // Convert bool to string
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  isDarkMode.value = localStorage.getItem('darkMode') === 'true'; // Convert string to bool
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  }
});
</script>

<style>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>
