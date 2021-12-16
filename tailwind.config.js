module.exports = {
  purge: [
    './slices/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '100': '100px',
        '80': '80rem',
      }
    },
  },
  mode: 'jit',
  listStyleType: {
   disc: 'disc',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
