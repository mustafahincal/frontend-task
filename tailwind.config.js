/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-item": "#112B3C",
        "nav-button": "#F66B0E",
        "footer-bg": "#FFF8F0",
        "content-bg": "#F5F5F5",
        "content-small-text": "#828282",
        search: "#BDBDBD",
        "product-bg": "#FFF8F0",
      },
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
