const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
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
        agrandir: ["'Agrandir'", "sans-serif"],
        agrandir_bold: ["'Agrandir_bold'", "sans-serif"],
      },
    },
  },
  plugins: [addVariablesForColors],
};
