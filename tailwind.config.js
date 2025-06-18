/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  safelist: [
  {
    pattern: /data-\[carousel-item(=active)?\]:(block|scale-100|scale-95)/,
  },
],
}