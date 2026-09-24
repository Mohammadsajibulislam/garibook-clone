/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0E52FF",
          "blue-mid": "#0E53FF",
          "blue-deep": "#0038C4",
          yellow: "#FDD300",
          "yellow-soft": "#EFC30C",
          "yellow-dark": "#E6C003",
          ink: "#121212",
          muted: "#9D9D9D",
          "muted-2": "#6D6D6D",
          line: "#E9E9E9",
          surface: "#F5F8FF",
          "surface-2": "#F1F6FF",
          "chip": "#E9E9E9",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Noto Sans Bengali", "sans-serif"],
        nav: ["'Uncut Sans'", "Montserrat", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        card: "0 -34px 34px 0 rgba(180,180,180,0.09), 0 -9px 19px 0 rgba(180,180,180,0.1)",
        nav: "0 8px 20px 0 rgba(0,0,0,0.1)",
      },
      borderRadius: {
        card: "12px",
        cta: "15px",
      },
    },
  },
  plugins: [],
};
