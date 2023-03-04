/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode:false,
  theme: {
    extend: {},
    container:{
      center:true,
      padding:'2rem',
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
