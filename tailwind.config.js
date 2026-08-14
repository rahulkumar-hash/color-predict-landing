/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030b1f',
          900: '#040d24',
          850: '#071236',
          800: '#0a1a4a',
          700: '#0d2060'
        },
        gold: {
          primary: '#B99052',
          light: '#CCA262',
          bright: '#F5C518',
          dark: '#9E7842',
          soft: '#D4B07A'
        },
        game: {
          green: '#10b981',
          violet: '#a855f7',
          red: '#ef4444',
          amber: '#f59e0b',
          emerald: '#059669'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(185, 144, 82, 0.4), 0 0 40px rgba(185, 144, 82, 0.2)',
        'gold-heavy': '0 0 30px rgba(245, 197, 24, 0.6), 0 0 60px rgba(185, 144, 82, 0.3)',
        'green-glow': '0 0 20px rgba(16, 185, 129, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)',
        'red-glow': '0 0 20px rgba(239, 68, 68, 0.4)',
        'violet-glow': '0 0 20px rgba(168, 85, 247, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite alternate',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'ticker-slide': 'tickerSlide 35s linear infinite',
        'bounce-soft': 'bounceSoft 1.5s ease-in-out infinite',
        'badge-pulse': 'badgePulse 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 10px rgba(185,144,82,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(185,144,82,0.8), 0 0 60px rgba(185,144,82,0.4)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.1' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)', opacity: '0.25' },
        },
        tickerSlide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        badgePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(16, 185, 129, 0)' },
        }
      }
    },
  },
  plugins: [],
}
