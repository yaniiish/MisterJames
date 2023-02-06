/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      moutarde: '#DCB233',
      card: '#B7A98E',
      noir: '#252525',
      dore: '#E3DCCB',
      white: '#ffffff'
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"], 
      lora: ["Lora", "serif"]
    },
  },
  plugins: [],
}