module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-background': '#F4F5F7',
        'dark-background': '#1A1125',
        'light-primary': '#653FFF',
        'dark-primary': '#653FFF',
        'light-secundary': '#FFFFFF',
        'dark-secundary': '#261D32'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
