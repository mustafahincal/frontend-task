/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-item": "#112B3C",
        "nav-button": "#F66B0E",
      },
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
