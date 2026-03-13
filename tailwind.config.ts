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
          gold: "#E5D095",
          cream: "#FDFCF0",
          dark: "#050505",
          muted: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
export default config;