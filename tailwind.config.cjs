/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'theme-blue-50': '#dcf4f8',
        'theme-blue-100': '#b9e9f0',
        'theme-blue-200': '#95dfe9',
        'theme-blue-300': '#72d4e1',
        'theme-blue-400': '#4fc9da',
        'theme-blue-500': '#3fa1ae',
        'theme-blue-600': '#2f7983',
        'theme-blue-700': '#205057',
        'theme-blue-800': '#10282c',
        'theme-blue-900': '#081416',
        'theme-orange-50': '#fce0da',
        'theme-orange-100': '#f9c1b5',
        'theme-orange-200': '#f6a28f',
        'theme-orange-300': '#f3836a',
        'theme-orange-400': '#f06445',
        'theme-orange-500': '#c05037',
        'theme-orange-600': '#903c29',
        'theme-orange-700': '#60281c',
        'theme-orange-800': '#30140e',
        'theme-orange-900': '#000000',
      },
      fontFamily: {
        primary: "'Exo 2', sans-serif",
      },
    },
  },
  plugins: [],
};
