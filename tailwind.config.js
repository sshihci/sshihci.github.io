/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    extend: {
      content: {
        'arrow-right-icon': `url("data:image/svg+xml,%3Csvg width='17' height='15' viewBox='0 0 17 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.69883 6.64141L2.81769 7.11425L3.69883 6.64141L1.17982 1.94723L15.3035 7.5871L1.17981 13.227L3.69883 8.53279C4.01578 7.94216 4.01578 7.23203 3.69883 6.64141Z' fill='%23025561' stroke='%23025561' stroke-width='2'/%3E%3C/svg%3E")`,
      },
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
