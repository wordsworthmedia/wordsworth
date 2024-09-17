/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './/*.php',
      '../Resources//*.{html,js}',
      './src/**/*.{jsx,js}',
  ],
 
  prefix: 'tw-',
  theme: {
      extend: {},
  },
  corePlugins: {
      preflight: false,
  },
  plugins: [],
}