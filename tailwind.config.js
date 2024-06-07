/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

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
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
