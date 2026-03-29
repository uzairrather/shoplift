/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1a2332',
        navy2: '#0f1825',
        orange: '#e8520a',
        orange2: '#ff6b25',
        offwhite: '#f5f5f3',
        lg: '#eaeaea',
        mgray: '#777777',
        dgray: '#444444',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        mont: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(28px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeLeft: { from: { opacity: 0, transform: 'translateX(-28px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        fadeRight: { from: { opacity: 0, transform: 'translateX(28px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        countup: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
    },
  },
  plugins: [],
}
