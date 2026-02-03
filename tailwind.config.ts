import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Map the CSS variables from layout.tsx
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        brand: {
          blue: "#1e3a8a", 
          gold: "#d4af37", 
          dark: "#0f172a", 
          light: "#f8fafc", 
        },
      },
    },
  },
  plugins: [],
};
export default config;