/** @type {import('tailwindcss').Config} */

// import scrollbarHide from 'tailwind-scrollbar-hide';
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-orange": "rgb(241 96 13)",
        'blue-rgb': 'rgb(0 8 67)',

      },
      
    },
    
  },
  plugins: [
    scrollbarHide,

  ],
};
