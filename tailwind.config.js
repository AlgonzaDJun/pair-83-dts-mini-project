/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require("tw-elements/dist/plugin"), 
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
