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
        borderColor:"#F2F2F2"
        
      }
    },
  },
  plugins: [],
}
