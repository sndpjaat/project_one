/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "black_Section": "#141414",
        "bg_Red": "#FF1E2F",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"]
      },
      backgroundImage: {
        header_Bg: `url("./assets/image/webp/hero_Bg.webp")`,
        footer_bg: `url("./assets/image/webp/footer_Bg.webp")`,
      },
      boxShadow: {
        "3xl": "0px 2.29px 23.91px 0px #FF55A5"

      },
      fontSize: {
        40: "40px",
        42: "42px",

      },
      backgroundSize: {
        "100%": "100% 100%",
      },
      backdropBlur: {
        '100': '100px',
      },

    },
  },
  plugins: [],
}

