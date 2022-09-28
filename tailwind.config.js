/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#eacd5b",

          "secondary": "#7addad",

          "accent": "#acef47",

          "neutral": "#1E1F29",

          "base-100": "#F8F1F9",

          "info": "#5F8FD3",

          "success": "#54DE89",

          "warning": "#EF9C1F",

          "error": "#EF6157",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

