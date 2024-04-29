import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      colors: {
        "primary-orange": "#FF5722",
        "primary-green": "#4CAF50",
        light: {
          green: "#C0FFB6",
          yellow: "#FCFF71",
        },
        shades: {
          1: "#FFFFFF",
          2: "#E6E6E6",
          3: "#CCCCCC",
          4: "#B3B3B3",
          5: "#999999",
          6: "#808080",
          7: "#666666",
          8: "#4D4D4D",
          9: "#333333",
          10: "#1A1A1A",
          11: "#000000",
          12: "#000000",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
