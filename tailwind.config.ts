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
        // Startup Peach Pink Color Palette
        primary: "#FF9A8B",        // Peach Pink
        secondary: "#FF6A88",      // Deep Pink
        accent: "#FF99AC",         // Light Pink
        peachBg: "#FFF5F3",        // Very Light Peach Background
        darkSlate: "#1E293B",      // Dark Slate for headings
        mediumGray: "#64748B",     // Medium Gray for body text
        lightGray: "#FFE5E0",      // Light Peach Gray for borders
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
