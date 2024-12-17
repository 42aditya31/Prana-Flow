/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#645452", // Dark Brown
        secondary: "#DFCFB7", // Soft Beige
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        actor: ["'Actor'", "sans-serif"],
        astraal: ["'Astraal'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
