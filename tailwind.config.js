
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'200px',
      md: '768px', 
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['Quicksand'],
      'serif': ['Sora']
    },
    extend: {
      colors: {
        eggWhite: '#FAFAFA',
        white: '#FFFFFF',
        black: '#333333',
        blue: '#2B31B2',
        darkBlue: '#131A8D',
        red: '#FF0000',
        fadedBlue: '#CEE5FF',
      }
    },
  },
  plugins: [],
}
