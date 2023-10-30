/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
        height: "height",
        underline: "underline",
        display: "display",
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      boxShadow: {
        belo: "0px 4px 4px rgba(51, 51, 51, 0.03)",
      },
      backgroundImage: {
        bsas: "url('/src/assets/backgrounds/bsas.jpg')",
      },
    },
  },
  plugins: [],
};
