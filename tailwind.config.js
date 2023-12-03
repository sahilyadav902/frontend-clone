/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary1: "#1c1c1c",
        primary2: "#fdf2ec",
        secondary: "#767575",
        highlight: "#fe8162",
        button: "#8247ff",
        card: "#ededfa",
      },
      boxShadow: {
        all: "0px 0px 6px 6px rgba(0, 0, 0, 1)",
      },
    },
  },

  plugins: [],
};
