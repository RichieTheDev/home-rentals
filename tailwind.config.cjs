/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0.39)),url('./assets/Hero.png')",
      },
    },
  },
  plugins: [],
};
