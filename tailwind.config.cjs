/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hacker: ["Orbitron", "monospace"],
      },
      colors: {
        neon: '#00ffea',
        cyberbg: '#0f0f0f',
      },
    },
  },
  plugins: [],
}
