/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        cream: '#f7f1e6',
        gold: '#caa351',
        maroon: '#6f2b2b',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
