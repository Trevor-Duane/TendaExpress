/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./App.{js,jsx,ts,tsx}", 
      "./screens/**/*.{js,jsx,ts,tsx}", 
      "./components/**/*.{html,js}",
      "./assets/**/*.{png,jpg}"
    ],
     
  },
  theme: {
    extend: {},
  },
  plugins: [],
}