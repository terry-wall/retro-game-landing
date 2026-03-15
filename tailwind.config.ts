import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          yellow: "#EEFF00",
          pink: "#FF2D7C",
          blue: "#00F0FF",
          purple: "#1a0a2e",
          "dark-purple": "#0d0518",
          green: "#39FF14",
          orange: "#FF6B35",
        },
        cream: "#FFF8E7",
      },
      fontFamily: {
        bangers: ["Bangers", "cursive"],
        pixel: ["Press Start 2P", "monospace"],
        special: ["Special Elite", "cursive"],
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        "neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "neon-pulse": {
          "0%": {
            "text-shadow": "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
          "100%": {
            "text-shadow": "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%": {
            "box-shadow": "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "100%": {
            "box-shadow": "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;