/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        Anonymous: ["'Anonymous Pro'", "monospace"],
      },
      backgroundImage: {
        bgtitle: "url('/assets/bgtitle.webp')",
        bgstory: "url('/assets/story.webp')",
        bgstory1: "url('/assets/story1.webp')",
        bottle: "url('/assets/bottlebg.webp')",
        recipes: "url('/assets/recipes1.webp')",
      },
    },
  },
  plugins: [],
};
