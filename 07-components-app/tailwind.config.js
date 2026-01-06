import {Colors} from "./src/constants/Colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: Colors.light,
        dark: Colors.dark,
      },
    },
  },
  plugins: [],
}

