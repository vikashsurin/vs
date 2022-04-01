module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
      },
      colors: {
        globalOrange: "#EFA029",
        globalBlue: "#38A5D3",
        globalGreen: "#3AAD42",
        mutedOrange: "rgba(239,160,41,.8)",
        mutedGreen: "rgba(58,173,66,.8)",
        mutedGray: "#9A9A9A",
        mutedBlack: "rgb(30, 32, 38)",
        mutedText: "rgb(204, 205, 203)",
      },
      fontFamily: {
        "dancing-scripts": ["Dancing Script", "cursive"],
      },
      dropShadow: {
        neu: [
          " 10px 10px 20px  rgba(0,0,0,.8)",
          " -10px -10px 12px rgba(158, 158, 158,.1)",
        ],
        hoverneu: [
          " 20px 20px 30px  rgba(0,0,0,.8)",
          " -5px -5px 10px rgba(158, 158, 158,.1)",
        ],
        def: [
          " 0px 5px 10px  rgba(0,0,0,.2)",
          " 0px -1px 1px rgba(158, 158, 158,.1)",
        ],
      },
    },
  },
  plugins: [],
};
