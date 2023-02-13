/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#379237",
      secondary: "#54B435",
      mid: "#82CD47",
      light: "#F0FF42",
      "gray-dark": "#273444",
      "lightest-grey": "#999",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      yellow: "#F0FF42",
      green: "#54B435",
      "light-green": "#82CD47",
      "dark-green": "#379237",
      orange: "#F49D1A",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
