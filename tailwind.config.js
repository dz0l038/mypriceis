module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        '-45': '-45deg',
        '-30': '-30deg',
      },
      keyframes: {
        translate: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(100px, 0px)' },
        },
        translateneg: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-100px, 0px)' },
        }
      },
      animation: {
        'translate-4': 'translate 4s ease-in-out infinite',
        'translate-5': 'translate 5s ease-in-out infinite',
        'translate-6': 'translate 6s ease-in-out infinite',
        '-translate-4': 'translateneg 4s ease-in-out infinite',
        '-translate-5': 'translateneg 5s ease-in-out infinite',
        '-translate-6': 'translateneg 6s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
