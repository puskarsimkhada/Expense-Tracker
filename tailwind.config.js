/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#007A92",
        "text-color": "#FFFFFF",
        "second-color": "#f37e7e",
      },
    },
  },
  plugins: [],
};
