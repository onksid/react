/** @type {import('tailwindcss').Config} */

const colors = require('./src/tailwind/config/colors.cjs')
const fonts = require('./src/tailwind/config/fonts.cjs')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: fonts,
      colors: colors,
    },
  },
  plugins: [],
}
