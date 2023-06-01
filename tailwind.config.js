/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      'colorLogo': '#e65b4f',
      'colorCards': '#ffd6ad',
      'colorButtons': '#ff8e51',
      'colorIndexBG': '#eeecdf',
      'colorIcons': '#0d6efd',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

