module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-background': '#080217',
        'theme-primary': '#4D2DCC',
        'theme-secundary': '#555C9E',
        'theme-tertiary': '#E0E3FF',
        'theme-hover': '#2A0BA9'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
