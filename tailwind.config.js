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
        agrandir: ["'Agrandir'", "sans-serif"],
        agrandir_bold: ["'Agrandir_bold'", "sans-serif"],
      },
    //   screens: {
    //     'sm': '320px',
    //         // => @media (min-width: 640px) { ... }

    //     'md': '768px',
    //     // => @media (min-width: 768px) { ... }

    //     'lg': '1024px',
    //     // => @media (min-width: 1024px) { ... }

    //     'xl': '1280px',
    //     // => @media (min-width: 1280px) { ... }

    //     '2xl': '1536px',
    //     // => @media (min-width: 1536px) { ... }
    //  },
    },
  },
  plugins: [],
};
