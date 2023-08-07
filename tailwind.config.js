module.exports = {
  content: ["./components/**/*.{js,vue}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif"],
        os: ["Oswald"],
        mont: ["Montserrat"],
        pop: ["Poppins"],
      },
      spacing:{
        '128':'32rem',
      }
    },
  },
  plugins:[ require("@tailwindcss/typography")],
};
