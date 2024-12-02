/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fondoCard": "#232635",
        "letraIdioma": "#686e7a",
        "grisClarito": "#4d5562",
        "linea": "#353b4b"
      }
    },
  },
  plugins: [],
}

