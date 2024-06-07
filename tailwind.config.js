/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1296px',
    },

    extend: {
      colors: {
        'text-dark': '#3B3B3B',
        'text-light': '#919191',
        'tag-color': '#F1F1F1',
        'border-color': '#C1C1C1',
        'gray': '#5B5B5B',
      },
      fontFamily: {
        noto: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
