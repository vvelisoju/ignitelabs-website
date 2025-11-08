/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Used for borders and layouts
        border: "hsl(214, 32%, 91%)",

        // Background & text
        background: "hsl(210, 20%, 98%)",
        foreground: "hsl(222, 47%, 11%)",

        // Primary accent color
        primary: {
          DEFAULT: "hsl(222, 89%, 63%)", // base blue
          foreground: "hsl(210, 20%, 98%)",
        },

        // Optional secondary, muted, etc.
        secondary: "hsl(260, 8%, 70%)",
        muted: "hsl(220, 14%, 96%)",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
