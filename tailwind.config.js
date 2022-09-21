
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'460px',
      md: '768px', 
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['Rubik', 'sans-serif'],
      'serif': ['Rubik', 'sans-serif']
    },
    extend: {
      colors: {
        eggWhite: '#FAFAFA',
        white: '#FFFFFF',
        black: '#333333',
        blue: '#131BD4',
        darkBlue: '#0A0F7D',
        red: '#810000',
        fadedBlue: '#CEE5FF',
        lightBlue: '#DAEBFF',
        backgroundGrey: '#F5F5F5',
        lightGrey: '#7D7D7D',
      }
    },
  },
  plugins: [],
}
