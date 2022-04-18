module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: "'Fira Sans', sans-serif",
        dela: "'Dela Gothic One', sans-serif",
        akira: "Akira Expanded",
        'helvetica-regular': "Helvetica Now Display Regular",
        'helvetica-title': "Helvetica Now Display Title"
      },
      animation: {
        'slide-text': 'slide-up 3s',
        'slide-right-text': 'slide-right 2s forwards',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        'slide-up': {
          "from": { opacity: 0, 'line-height': "150px" },
          "to": { opacity: 1, 'line-height': "25px" }
        },
        'slide-right': {
          'from': { transform: 'translateX(-100%)' },
          'to' : { transform: 'translateX(0)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
