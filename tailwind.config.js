/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo"],
        poppins: ["Poppins"],
      },
      colors: {
        greenColor: "#60BB46",
        greenColorLight: "#69D34B",
        greenColorligher: "#7D8F69",
        greenColorDark: "#557153",
        orangeColor: "#F27520",
        orangeColorLight: "#FFA438",
        orangeColorLighter: "#E6E5A3",
        greyColor: "#343A40",
        greyDarkColor: "#212529",
        greyColorLight: "#6C757D",
        greyColorLighter: "#F8F9FA",
      },
    },
  },
  plugins: [],
};
