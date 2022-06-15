module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      main: "#C7934E",
      white:"#FFFFFF",
      bordergray: "#AAAAAA",
      maingray: "#333333",
      boldgray: "#111111",
      lightgraytext: "#737373",
      lightgray: "#C4C4C4",
      topbar: "#F5F5F5",
    },
    fontFamily: {
      'logo': ['Jost']
    },
    
    extend: {
      spacing: {
        '2xlwidth': '1400px',
        'xlwidth': '1165px',
        'lgwidth': '920px',
        'mobilewidth': '100%'
      }
    },
  },
  plugins: [],
}
