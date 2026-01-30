/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        cream: "#faf9f7",
        "pink-light": "#f3dfe3",
        "pink-dark": "#831843",
        "light-gray": "#F0F0F0",
        mint: "#ECF4E8",
      },
    },
  },
  plugins: [],
};
