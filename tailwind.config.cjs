/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
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
      },
      screens: {
        xxs: "375px",
        sm: "475px",
      },
    },
  },
  plugins: [],
};
