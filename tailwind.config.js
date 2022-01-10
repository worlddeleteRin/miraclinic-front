const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
          ...colors,
          primary: "#000",
          primaryGrey: "#000",
          secondary: "#fff",
      },
    //extend: {},
    screens: {
        'sm': '640px',
        'md': '900px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
