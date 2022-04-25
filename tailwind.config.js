module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#100c08"
      },
      fontFamily: {
        fira: "'Fira Sans', sans-serif",
        dela: "'Dela Gothic One', sans-serif",
        akira: "Akira Expanded",
        "helvetica-regular": "Helvetica Now Display Regular",
        "helvetica-title": "Helvetica Now Display Title",
      },
      animation: {
        "slide-text": "slide-up 3s",
        "slide-right": "slide-right 1.2s forwards",
        "slide-left": "slide-left 1.2s forwards",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        "marquee2-right": "marquee2-right 25s linear infinite",
      },
      keyframes: {
        "slide-up": {
          from: { opacity: 0, "line-height": "150px" },
          to: { opacity: 1, "line-height": "25px" },
        },
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        "slide-left": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "marquee2-right": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
