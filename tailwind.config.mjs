/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f2f5',
          100: '#e1e5eb',
          200: '#c3cbd7',
          300: '#a5b1c3',
          400: '#8797af',
          500: '#697d9b',
          600: '#4b6387',
          700: '#2d4973',
          800: '#0f2f5f',
          900: '#021630', // Doctor Meade dark navy
          950: '#010b18',
        },
        accent: {
          50: '#fdfbf3',
          100: '#fbf7e7',
          200: '#f7efcf',
          300: '#f1d88b', // Doctor Meade light gold
          400: '#edc947',
          500: '#e9ba03',
          600: '#d4a803',
          700: '#bf9603',
          800: '#aa8403',
          900: '#957203',
          950: '#806003',
        },
        dental: {
          navy: '#021630', // Using the dark navy
          gold: '#f1d88b', // Using the light gold
          pearl: '#fafafa',
          charcoal: '#1e293b',
          gray: '#485d6d', // Subtle blue-gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['EB Garamond', 'Georgia', 'serif'],
        display: ['EB Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(135deg, rgba(30, 90, 148, 0.95), rgba(8, 145, 178, 0.85))',
        'gradient-dark': 'linear-gradient(135deg, rgba(15, 62, 102, 0.98), rgba(10, 39, 68, 0.95))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}