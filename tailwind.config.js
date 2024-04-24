/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "button-header-black": "rgba(var(--color-button-header-black), 1)",
        "button-header-white": "rgba(var(--color-button-header-white), 1)",
      }
    },
  },
  plugins: [],
}
