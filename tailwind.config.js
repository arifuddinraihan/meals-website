/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fffcbc",

          "secondary": "#ed957d",

          "accent": "#59ff6c",

          "neutral": "#212435",

          "base-100": "#46284D",

          "info": "#6FC0D3",

          "success": "#23C770",

          "warning": "#CFA417",

          "error": "#F6465A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

