module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},  
    backgroundImage: {
      'header': "url('./src/assets/header.jpg')",
      'home': "url('./src/assets/home.jpg')"
     },
     fontFamily: {
      'roboto': 'Roboto'
     }
  },
  plugins: [],
}