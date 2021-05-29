module.exports = {
  purge: {
    content: ['./**/*.njk'],
    options: {
      // Remove unused keyframes
      keyframes: true,
      // Remove unused font-faces
      fontFace: true
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
