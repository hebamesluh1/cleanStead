/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerColor:"#1D1D35",
        btnColor:"#00ADEE",
        footerBg:"#E5F7FD",
        textColor:"#7D7E82",
        borderColor:"#F2F2F2",
        titleHero:"#8FC930",
        cardTitle:"#303C38",
        descFont:"#6D6E71",
        signature:"#2F3239",
        iconsColor:"#CCD2E3",
      }
    },
  },
  plugins: [],
}
