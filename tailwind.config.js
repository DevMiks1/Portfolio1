/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: "class",
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
        facebook : "#1877F2",
        gmail : "#DB4437",
        insta : "#FD1D1D",
        blues : "#0099aa",
        reds: "#FF6347",
        yellows: "#F7DF1E",
        greens: "#3FA037",
        php:"#0074A3",
        semidark: "#373A40",
        option: "#1A1B1E",
        linedark: '#2C2E33',
        linelight: "#E9ECEF",
        navbar: "#495057",
        bgcard: "#EDF1F7",
        alternative: "#9AA9B4,"

      },
    },
  },
  corePlugins: {
    // Enable the transition-opacity utility
    transitionOpacity: true,
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

