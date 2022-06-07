module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundVideo: {
        'hero-section': "url('/forjobs/assets/videoBg.mp4')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
