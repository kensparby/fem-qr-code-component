/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.html"],
  theme: {
    fontFamily: {
      sans: ["Outfit", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        grayBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
      fontSize: {
        base: "15px",
        title: "2rem",
      },
    },
  },
  plugins: [],
};
