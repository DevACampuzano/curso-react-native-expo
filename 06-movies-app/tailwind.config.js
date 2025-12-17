/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./src/app/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
     keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
       animation: {
        'fade-in': 'fade-in 1s ease-out forwards', // 1s duration, ease-out timing, stays at the end state
      },
    },
  },
  plugins: [],
}

