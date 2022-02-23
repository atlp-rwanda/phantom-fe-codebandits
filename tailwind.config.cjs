module.exports = {
  content: ['./src/**/*.{js, jsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: '#1B73E8',
        hover: '#053A80',
        hover2: '#f3f7fc',
        background: '#fafafa',
        hovercancel: '#9B1A1B'
      },
      boxShadow: {
        main: '0px 0px 6px 4px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};
