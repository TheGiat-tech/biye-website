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
        // FemSelect Color Palette
        primary: "#4A6FA5",        // Clinical Blue-Gray
        secondary: "#6B8CBB",      // Lighter Blue
        darkSlate: "#1E293B",      // Dark Slate for headings
        mediumGray: "#64748B",     // Medium Gray for body text
        lightGray: "#E2E8F0",      // Light Gray for borders
        white: "#FFFFFF",          // Pure White
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
