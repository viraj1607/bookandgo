/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-grey": "0px 0px 10px gray",
      },
      padding: {
        '15': '6.5rem', // Adding a custom padding value of 15
      },
    },
  },
  plugins: [],
};
