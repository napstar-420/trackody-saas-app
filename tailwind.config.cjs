/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4fc9da',
        primary_darken: '#37aebe',
        primary_lighten: '#5ddef0',
        secondary: '#f06445',
        light_text: "#211f1c",
        light_900: "#716f6e",
        light_800: "#8f8984",
        light_700: "#98856f",
        light_600:"#bcb1a1",
        light_500: "#dad3c3",
        light_400_darker: "#f4f1eb",
        light_400: "#f8f6f2",
        light_300: "#fdfcfb",
        dark_600: "#151521",
        dark_600_lighter: "#1f1f2f",
        dark_500: "#1b1b29",
        dark_400: "#2b2b40",
        dark_400_lighter: "#2f2f45",
        dark_300: "#3e3e54",
        dark_200: "#59586c",
        dark_100: "#7b8c9f",
      },
      fontFamily: {
        primary: "'Exo 2', sans-serif"
      }
    },
  },
  plugins: [],
}