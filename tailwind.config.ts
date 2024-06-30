/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 7s infinite',
        'pulse-slow': 'pulse 10s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
    
  ],
}

