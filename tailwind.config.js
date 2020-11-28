module.exports = {
  darkMode: 'class',
  // darkMode: 'media',
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      translate: ['motion-safe'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
