/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jakarta:["Plus Jakarta Sans", 'sans-serif'],
      },
      boxShadow: {
        'shadow-nav': '13.49px 16.87px  40px 20px #0A0A0A, -8.43px -20px 100px 20px #485B71 ', // Custom shadow with spread
      },
      screens:{
        'mx': '800px'
      }
    },
  },
  plugins: [],
}