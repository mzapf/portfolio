/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        'custom-gray': '#0d1117',
        'custom-gray-2': '#0a0d12',
      },

    },
  },
  plugins: [],
}