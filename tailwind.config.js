module.exports = {
  purge: [
    './*.html',
    './src/stubs/*.html',
  ],
  theme: {
    screens: {
      'xs': '467px',
      'sm': '744px',
      'md': '910px',
      // => @media (min-width: 640px) { ... }

      'lg': '1147px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1300px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [],
}