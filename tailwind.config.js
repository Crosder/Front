/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff79c6',
        neonCyan: '#8be9fd',
        neonGreen: '#50fa7b'
      },
      fontFamily: {
        modern: ['"Segoe UI"', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 10px #ff79c6, 0 0 20px #ff79c6',
        neonBlue: '0 0 10px #8be9fd, 0 0 20px #8be9fd',
      },
      animation: {
        fade: 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
