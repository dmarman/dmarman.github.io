module.exports = {
  purge: [
    './*.html',
    './src/stubs/*.html',
  ],
  theme: {
    extend: {
      colors: {
        royalblue: {
          '50':  '#f6fbfd',
          '100': '#e7f8fd',
          '200': '#c2e8fb',
          '300': '#98d2fb',
          '400': '#5fa7fa',
          '500': '#2f7af9',
          '600': '#0963ef',
          '700': '#1b43dd',
          '800': '#1733aa',
          '900': '#132a82',
        }
      },
    },
    screens: {
      'xs': '467px',
      'sm': '752px',
      'md': '910px',
      // => @media (min-width: 640px) { ... }

      'lg': '1161px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1314px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [],
}