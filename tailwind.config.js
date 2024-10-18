/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFD700',
        'secondary': '#FFA500',
        'tertiary': '#FF6347',
        'background': '#000000',
      },
    },
  },
  plugins: [],
}
