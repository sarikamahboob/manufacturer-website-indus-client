module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira Condensed", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#222222",
          secondary: "#161616",
          accent: "#FE8901",
          neutral: "#9B9B9B",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#12a317",
          warning: "#DF7E07",
          error: "#ed0c0c",
        },
      },
      {
        dark: {
          primary: "#ffffff",
          secondary: "#161616",
          accent: "#FE8901",
          neutral: "#F3F4F6",
          "base-100": "#222222",
          info: "#98A8DD",
          success: "#D9F99D",
          warning: "#F59E0B",
          error: "#ed0c0c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
