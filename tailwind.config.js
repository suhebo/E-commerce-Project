/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryColor: "#9BB8CD",
        secondaryColor: "#15133C",
      }
    },
  },
  plugins: [],
}

