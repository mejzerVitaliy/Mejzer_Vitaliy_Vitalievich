/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,scss}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        karla: ['Karla', 'sans-serif']
      },
      letterSpacing: {
        wide: '0.25em',
      },
      backgroundImage: {
        'conic-gradient': 'conic-gradient(#0000 10%, #766DF4)',
      },
      maskImage: {
        'radial-gradient': 'radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.conic-gradient': {
          background: 'conic-gradient(#0000 10%, #cd5200)',
        },
        '.mask-radial': {
          '-webkit-mask': 'radial-gradient(farthest-side, transparent calc(100% - 8px), black 0)',
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }

  ]
}
