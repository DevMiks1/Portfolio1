/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01051e",
        primarylight: "#020726",
        primarydark: "#010417",
        secondary: "#ff7d3b",
        white: "#fff",
        light: "#909296",
        violet : "#A427DF",
        black: "#292929cc",
        facebook : "#1877F2",
        gmail : "#DB4437",
        insta : "#FD1D1D"
        
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

