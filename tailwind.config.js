/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        source: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        pink: "#d9008d",
        "black-100": "#17181a",
        skeleton: "#262728",
        blue: "#3F72AF",
        "blue-100": "#112D4E",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
