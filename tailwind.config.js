module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-background': '#080217',
        'theme-primary': '#653FFF',
        'theme-secundary': '#8C95E6',
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
