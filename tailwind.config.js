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
        "customer-comments-bg": "#112B3C",
        "product-page-header-search": "#F3F3F3",
        "product-search-button": "#0064D2",
        "product-image-bg": "#E6F0FB",
        "product-description-text": "#2F294D",
        "product-page-sponsored": "#1E1F4B",
      },
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "product-header": "40px",
      },
      boxShadow: {
        "product-header": "0px 0px 30px rgba(0, 0, 0, 0.12)",
        "sponsored-item": "0px 4px 30px rgba(0, 0, 0, 0.08)",
        header: "0px 0px 10px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
