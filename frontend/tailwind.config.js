/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' for automatic dark mode based on the user's system settings
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
