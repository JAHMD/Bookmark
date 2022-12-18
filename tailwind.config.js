/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: {
          SoftBlue: "hsl(231, 69%, 60%)",
          SoftRed: "hsl(0, 94%, 66%)",
        },
        neutral: {
          GrayishBlue: "hsl(229, 8%, 60%)",
          VeryDarkBlue: "hsl(229, 31%, 21%)",
        },
      },
    },
  },
  plugins: [],
};
