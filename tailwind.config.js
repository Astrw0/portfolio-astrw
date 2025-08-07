const { fontFamily } = require("tailwindcss/defaultTheme");
console.log("Tailwind CSS configuration loaded");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mozilla: ['Mozilla Text', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        google: ['Google Sans Code', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
