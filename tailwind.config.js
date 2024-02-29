/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  //   content: ["./build/**/*.{html,js}"],

  theme: {
    // if u write here u r going to override all styles that tailwind provides
    extend: {
      // it extends and add styles and dont take anything away from tailwind
      // this is where we write our custom media screen styles, animations, and keyframs
      colors: {
        papayawhip: {
          light: "#fef4e4",
          DEFAULT: "#ffefd5",
          dark: "#fee5bc",
        },
      },
      screens: {
        widescreen: { raw: `(min-aspect-ratio: 3/2)` }, // more width than height
        tallscreen: { raw: `(max-aspect-ratio: 13/20)` }, // more height than width
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
