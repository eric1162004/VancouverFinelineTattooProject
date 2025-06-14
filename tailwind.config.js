/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#E2CFC4",
          DEFAULT: "#EBD8D0",
          dark: "#EBD8D0",
        },
        green: "#7FB069",
        black: "#02020B",
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#EBD8D0",
          secondary: "#EBD8D0",
          accent: "#EBD8D0",
          neutral: "#EBD8D0",
          "base-100": "#EBD8D0",
          info: "#84D0F0",
          success: "#0C5F48",
          warning: "#EFBE2A",
          error: "#F7715F",
          "neutral-content": "#eeeeee",
          "--border-btn": "0px",
          "--tab-border": "0px",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    // darkTheme: "dark",
  },
};
