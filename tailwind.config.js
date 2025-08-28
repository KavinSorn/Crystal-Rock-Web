/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f2f9',
          100: '#e3e7f3',
          200: '#c7d0e7',
          300: '#a5b2d8',
          400: '#8391c5',
          500: '#3D4D73', // Main logo color
          600: '#364263',
          700: '#2f3754',
          800: '#282d46',
          900: '#21263b',
        },
        secondary: {
          50: '#fefdf8',
          100: '#fefbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'forge-glow': 'forge-glow 2s ease-in-out infinite alternate',
        'metallic-shine': 'metallic-shine 3s ease-in-out infinite',
        'scale-102': 'scale-102 0.3s ease-out',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'forge-glow': {
          '0%': { boxShadow: '0 0 5px rgba(61, 77, 115, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(61, 77, 115, 0.6), 0 0 30px rgba(61, 77, 115, 0.4)' },
        },
        'metallic-shine': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'scale-102': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
