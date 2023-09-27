/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      gold: "rgb(255, 188, 4)",
      black: "#101010",
      grey: "#272727",
      midgrey: "#696969",
      faintgrey: "#a5a5a5",
    },
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      navb: "855px",
      lg: "1100px",
    },
  },
  plugins: [],
}
