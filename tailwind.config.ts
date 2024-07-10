/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 7s infinite',
        'pulse-slow': 'pulse 10s infinite',
        'wiggle': 'wiggle 1s infinite',
      },
    },
    screens: {
      'sm': {'min': '100px', 'max': '459px'},
      'md': {'min': '460px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1042px'},
      'xl': {'min': '1043px', 'max': '1299px'},
      '2xl': {'min': '1300px'},
    },
  },
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
