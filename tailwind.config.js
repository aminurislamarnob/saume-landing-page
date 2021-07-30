module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
    },
    extend: {
      colors: {
        brand: {
          red: '#ff284f',
          black: '#3f3f3f',
          gray: '#f7f8fa',
          green: '#45c881',
        },
      },
      fontFamily: {
        brand: "'Baloo Da 2', 'cursive'"
      },
      boxShadow: {
        DEFAULT: '0 2px 4px 0 rgb(0 0 0 / 3%)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
