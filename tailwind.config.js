/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html, js, ejs}", "**/**/*.{html, js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
}
