/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#FFA500',
      'primary': '#B2BEB5',
      'secondary': '#4A0404',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#edebe6',
      'white': '#ffffff',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      stylish: ['Stylish', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}