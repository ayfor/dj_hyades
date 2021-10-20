module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        green: '2px solid #34D399'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
