module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    extend: {
      dropShadow: {
        hexagon: '2px 5px 4px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        noto: [
          '"Noto Sans JP"',
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
}
