const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          25: '#FCFCFC',
          100: '#F5F5F5',
          400: '#A3A3A3',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        red: {
          25: '#FFFBFA',
        },
        primary: {
          100: '#fafdf6',
          200: '#E1ECE1',
          300: '#D3E8D2',
          400: '#EBF3E9',
          800: '#AED1AC',
          900: '#424941'
        },
        ...defaultTheme.colors,
      },
      maxWidth: {
        "172": "172px",
        ...defaultTheme.maxWidth,
      },
      borderRadius: {
        "4xl": "32px",
        ...defaultTheme.borderRadius,
      },
      backgroundImage: {
        'primary-half-r': "linear-gradient(90deg, #FFFFFF 50%, #F0FDFB 50%);",
        'primary-half-l': "linear-gradient(90deg, #F0FDFB 50%, #FFFFFF 50%);",
        ...defaultTheme.backgroundImage,

      }

    },
  },
  plugins: [],
}