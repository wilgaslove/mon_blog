/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 7s infinite',
        'pulse-slow': 'pulse 10s infinite',
        'wiggle': 'wiggle 1s  infinite',
      }
    },
    screens: {
     'sm': {'min': '100px','max': '459px'},
      'md': {'min': '460px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1024px'},
      'xl': {'min': '1025px'},
      // '2xl': {'min': '1537px'},
    }
  },
  plugins: [
    require("@tailwindcss/typography")
    
  ],
}

