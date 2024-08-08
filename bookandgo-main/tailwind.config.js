/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-grey": "0px 0px 10px gray",
        "custom-shadow": "0px 12px 24px 0px rgba(0, 0, 0, 0.10)",
        "custom-shadow-2": "0px 0px 20px 0px rgba(0, 0, 0, 0.20)",
      },
      padding: {
        '15': '6.5rem', // Adding a custom padding value of 15
      },
      position: {
        'webkit-sticky': '-webkit-sticky',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
