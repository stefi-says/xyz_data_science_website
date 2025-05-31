/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'strong-orange': '#e19503',
        'black': '#1c1c1e',
        'light-orange': '#fcaa0c',
        'light-grey': '#888888',
        'offset-white': '#f7f6f7',
        'charcoal-black': '#121212',
        'graphite-grey': '#2C2C2E',
      },
    },
  },
  plugins: [],
};
