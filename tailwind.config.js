import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    fontFamily: {
      ruthie: 'Ruthie',
    },
    extend: {
      fontFamily: {
        sans: ['Ruluko', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
