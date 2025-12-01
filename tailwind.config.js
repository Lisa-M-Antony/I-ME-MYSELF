/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Data Renaissance Palette
        'renaissance-charcoal': {
          50: '#f5f5f5',
          100: '#e9e9e9',
          200: '#d3d3d3',
          300: '#b8b8b8',
          400: '#9a9a9a',
          500: '#7c7c7c',
          600: '#5e5e5e',
          700: '#404040',
          800: '#2c2c2e',
          900: '#1c1c1e'
        },
        copper: {
          50: '#fef9f3',
          100: '#fdf2e7',
          200: '#f9e2c3',
          300: '#f5d09f',
          400: '#e1b968',
          500: '#b08d57',
          600: '#d4af37',
          700: '#996f3d',
          800: '#7a5530',
          900: '#5c3e20'
        },
        sage: {
          50: '#f6f8f4',
          100: '#eff2ea',
          200: '#d8e0d0',
          300: '#c1ceb5',
          400: '#a5b894',
          500: '#87a96b',
          600: '#6b8550',
          700: '#556b41',
          800: '#435533',
          900: '#324028'
        },
        parchment: {
          50: '#fefefe',
          100: '#fdfdfc',
          200: '#f9f7f0',
          300: '#f5f1e8',
          400: '#f0ead2',
          500: '#ebe4bd',
          600: '#e1d5a0',
          700: '#d4c181',
          800: '#c7ad62',
          900: '#b89943'
        },
        // Legacy colors for compatibility
        primary: {
          400: '#b08d57',
          500: '#b08d57',
          600: '#996f3d',
        },
        accent: {
          400: '#87a96b',
          500: '#87a96b',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'elegant': ['Playfair Display', 'Georgia', 'serif'],
        'mathematical': ['Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wisdom-shimmer': 'wisdom-shimmer 4s infinite',
        'mathematical-drift': 'mathematical-drift 20s linear infinite',
        'scholar-glow': 'scholar-glow 3s ease-in-out infinite alternate',
        'renaissance-fade': 'renaissance-fade 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'wisdom-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'mathematical-drift': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.3' },
          '25%': { opacity: '0.6' },
          '50%': { transform: 'translate(50vw, 20vh) rotate(180deg)', opacity: '0.4' },
          '75%': { opacity: '0.2' },
          '100%': { transform: 'translate(100vw, 0) rotate(360deg)', opacity: '0.3' },
        },
        'scholar-glow': {
          '0%': { boxShadow: '0 0 25px rgba(176, 141, 87, 0.2), 0 0 50px rgba(135, 169, 107, 0.1)' },
          '100%': { boxShadow: '0 0 35px rgba(176, 141, 87, 0.4), 0 0 70px rgba(135, 169, 107, 0.2)' },
        },
        'renaissance-fade': {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}