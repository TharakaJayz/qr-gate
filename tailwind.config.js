/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
       colors: {
        primary:'#67ADE5',
        secondary: '#E53E3E', 
      },
      screens:{
      ssm:'400px'
    }
      
    },

    

    
  },
  plugins: [],
}