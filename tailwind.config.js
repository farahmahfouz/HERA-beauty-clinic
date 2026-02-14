/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: ["max-w-[1200px]", "max-w-[1376px]", '-space-x-6'],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        cream: "#faf9f7",
        "pink-light": "#f3dfe3",
        "pink-dark": "#831843",
        "light-gray": "#F0F0F0",
      },
    },
  },
  plugins: [],
};
