import type { Config } from "tailwindcss";

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
      colors: {
        shortlyCyan: "#2acfcf",
        shortlyDarkViolet: "#3b3054",
        shortlyRed: "#f46262",
        shortlyGray: "#bfbfbf",
        shortlyGrayishViolet: "#9e9aa7",
        shortlyVeryDarkBlue: "#35323e",
        shortlyVeryDarkViolet: "#232127",
      },
    },
  },
  plugins: [],
};
export default config;
