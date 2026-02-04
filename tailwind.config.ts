import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
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
    },
  },
  plugins: [],
};

export default config;
