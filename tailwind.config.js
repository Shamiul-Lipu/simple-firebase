/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e486f9",

          "secondary": "#fcbfd2",

          "accent": "#e7ffa8",

          "neutral": "#241B2C",

          "base-100": "#2D343E",

          "info": "#4A6FDE",

          "success": "#229B60",

          "warning": "#956D0E",

          "error": "#FA6B91",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

