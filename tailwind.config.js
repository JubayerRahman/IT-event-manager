/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      colors:{
        bannerBg: "rgb(167,56,213,0.4)"
      }
    },
  },
  plugins: [require("daisyui")],
}

