/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        primary: "'Exo 2', sans-serif",
      },
    },
  },
  plugins: [],
};
