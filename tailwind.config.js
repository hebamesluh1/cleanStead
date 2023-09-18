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
        btnColor:"#00ADEE"
      }
    },
  },
  plugins: [],
}
