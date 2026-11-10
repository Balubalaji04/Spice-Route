/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: '#7F1D1D',
        saffron: '#F59E0B',
        cream: '#FFF7ED',
        ink: '#271715'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: { warm: '0 24px 70px rgba(83, 28, 20, .12)' }
    }
  },
  plugins: []
}
