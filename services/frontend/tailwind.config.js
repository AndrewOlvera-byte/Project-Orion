/** @type {import(tailwindcss).Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slateglass: {
          900: #0b0f14,
          800: #0f141a,
          700: #131922
        }
      }
    },
  },
  plugins: [],
}

