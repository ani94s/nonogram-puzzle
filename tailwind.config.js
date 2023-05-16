
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00049f",
        tertiary: "#0054ff",
        skyBlue: "#c2edda",
        mistyPink:"#f9c5bd",
        pinkHighlight: "#ff414e",
        blueLowlight: "#39a0ca",
        blueberry: "#6B7A8F",
        apricot: "#F7882F",
        citrus: "#F7C331",
        appleCore: "#DCC7AA",
        deepMattGray: "#393f4d",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimBeige: "#eae3c9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
      gridTemplateColumns:{
        'skill': 'repeat(auto-fill, minmax(160px, 1fr))',
        'skillSmall': 'repeat(auto-fill, minmax(150px, 1fr))',
        'project': 'repeat(auto-fill, minmax(300px, 2fr))',
      },
      transitionProperty:{
        'height': 'height',
      },
      maxWidth:{
        'card': '300px',
      },
      height:{
        'footer': '52px',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  content: [
    "./index.html",
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  plugins: [],
};
