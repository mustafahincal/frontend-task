/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navItem: "112B3C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
