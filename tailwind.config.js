/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand': '#291716',
        'aqua': '#00787D',
        'aqua-dark': '#005659',
        'orange': '#DF6604',
        'salmon': '#FEF3F0',
        'not-quite-black': '#282828',
        'secondary': {
          900: '#001819'
        }
      },
      fontFamily: {
        'sans': ['Epilogue'],
        'script': ['Gloria Hallelujah'],
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/coffee.jpg')",
        'hero-pattern-transparent': "url('./assets/coffee_transparent.png')",
      }
    },
  },
  plugins: [],
}