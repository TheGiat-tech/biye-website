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
        // BiYé Peach Pink Color Palette
        primary: "#FF9B9B",        // Peach Pink - Primary
        secondary: "#FFB5B5",      // Light Peach Pink
        accent: "#FFC9C9",         // Very Light Peach
        darkPeach: "#E88888",      // Darker Peach for hover
        textDark: "#2D1B1B",       // Dark Brown for headings
        textMedium: "#5C4646",     // Medium Brown for body text
        lightBg: "#FFF5F5",        // Very Light Peach Background
        white: "#FFFFFF",          // Pure White
        peachGradient: "#FFDEDE",  // Gradient support
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
