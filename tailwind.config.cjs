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
        cyber: {
          card: '#0a0f1c',
          glass: 'rgba(15,15,25,0.2)',
          neon: '#00ffee',
          cyanGlow: '#00ffff',
        },
      },
      dropShadow: {
        neon: ['0 0 5px #00ffee', '0 0 10px #00ffee99'],
      },
    },
  },
  plugins: [],
}
