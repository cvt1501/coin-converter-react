module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'default': "#2a0a4a",
      "btn-action": "#f84a24",
      transparent: 'transparent',
      white: "#fff",
      "description": "#9282a2",
      label: "#a0a2a8"
    },
    extend: {
      fontFamily: {
        latoRegular: ["Lato Regular", "sans-serif"],
        latoBold: ["Lato Bold", "sans-serif"],
        latoLight: ["Lato Light", "sans-serif"],

      },
    },
  },
  plugins: [],
}
