import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#fff6f7",
          100: "#ffe8ec",
          200: "#ffd1db",
          300: "#ffb1c4",
          400: "#ff86a6",
          500: "#f85f89",
          600: "#e53b6a",
          700: "#c12957",
          800: "#9f2149",
          900: "#821c3f",
        },
        ink: {
          50: "#f6f4f7",
          100: "#e9e4ea",
          200: "#cfc4d3",
          300: "#b39ebc",
          400: "#987aa5",
          500: "#7c5e8a",
          600: "#664a73",
          700: "#533d5f",
          800: "#44324e",
          900: "#362840",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(0, 0, 0, 0.35)",
        glow: "0 0 0 3px rgba(248, 95, 137, 0.15)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 1.6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
