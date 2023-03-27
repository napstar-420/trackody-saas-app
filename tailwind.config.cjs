/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4fc9da',
        primary_darken: '#37aebe',
        primary_lighten: '#5ddef0',
        secondary: '#f06445',
        dark: '#151521',
        dark_text: '#43445f',
        dark_bg: '#2b2b40',
      },
      fontFamily: {
        primary: ["'Roboto', sans-serif"],
        secondary: ["'Poppins', sans-serif"],
        montserrat: ["'Montserrat', sans-serif"],
        opensSans: ["'Open Sans', sans-serif"],
      }
    },
  },
  plugins: [],
}