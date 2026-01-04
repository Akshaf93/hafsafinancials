import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1e3a8a", // Royal Blue
          gold: "#d4af37", // Metallic Gold
          dark: "#0f172a", // Dark Slate
          light: "#f8fafc", // Off-white
        },
      },
    },
  },
  plugins: [],
};
export default config;