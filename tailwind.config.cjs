/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        neutral: {
          grey: "#8D8D8D",
          100: "#191A1F",
          200: "#3F4044",
          300: "#66666A",
          400: "#8C8C8F",
          500: "#B2B3B4",
          600: "#D1D1D2",
          700: "#DADADB",
          800: "#E7E7E8",
          900: "#F1F1F2",
          1000: "#F6F6F7",
          1100: "#FCFCFC",
        },
        primary: {
          100: "#F0EFF5",
          200: "#B3AECC",
          300: "#8C86B3",
          400: "#665D99",
          500: "#403580",
          600: "#332A66",
          700: "#26204D",
          800: "#1A1533",
          900: "#0D0B1A",
        },
        secondary: {
          100: "#FFF3EB",
          200: "#FEE1CE",
          300: "#FEC29D",
          400: "#FDA46D",
          500: "#FD853C",
          600: "#FC670B",
          700: "#CA5209",
          800: "#973E07",
          900: "#652904",
          1000: "#321502",
        },
        success: {
          400: "#249108",
          600: "#3DF110",
        },
        error: {
          100: "#FCCFCF",
          500: "#F11010",
          700: "#F43E3E"
        },
        whites: {
          100: "#F1F1F3",
          200: "#F5F5F5",
        },
        grey: "#4c4c4d",
      },
      screens: {
        xxs: "375px",
        sm: "475px",
      },
      boxShadow: {
        dropShadow:
          "0px 0px 2px 0px rgba(0, 0, 0, 0.05), 0px 4px 8px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
