import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#C7F000",
        dark: "#0A0A0A",
      },
      boxShadow: {
        neon: "0 0 30px rgba(199,240,0,.6)",
      },
      keyframes: {
        zoomInfinite: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        zoomInfinite: "zoomInfinite 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};


export default config;
