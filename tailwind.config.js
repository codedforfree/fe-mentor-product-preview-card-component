module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md',],
  theme: {
    extend: {
      colors: {
        'cyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'dark-blue': 'hsl(212, 21%, 14%)',
        'gray-blue': 'hsl(228, 12%, 48%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'sans': ['Montserrat'],
        'serif': ['Fraunces'],
      }
    },
  },
  plugins: [],
}
