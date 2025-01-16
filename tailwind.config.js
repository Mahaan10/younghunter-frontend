import {fontFamily} from "tailwindcss/defaultTheme"
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      textUnderlineOffset: {
        13 : "13px"
      },
      boxShadow: {
        '3xl': '0 10px 30px rgba(0,0,0,0.45)'
      },
      fontFamily: {
        sans: ["Ubuntu", "Vazir", ...fontFamily.sans]
      }
    },
  },
  plugins: [flowbite.plugin()],
};
