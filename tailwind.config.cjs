/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-violet": "#845EC2",
        "primary-gray": "#898999",
        "primary-yellow": "#F8FD79",
        "primary-green": "#2dffad",
        "primary-pink": "#ff09e2",
        "secondary-green": "#b2dddd",
        "secondary-pink": "#ff7bda",
      },
      backgroundImage: (theme) => ({
        "gradient-space-1": "linear-gradient(to right, #434343 0%, black 100%)",
        "gradient-space-btt":
          "linear-gradient(to top, #0d0d12, #131219, #17161f, #1c1a26, #211d2c, #221e2e, #231e30, #241f32, #201d31, #1d1b30, #18192f, #14172e)",
        "gradient-space-ttb":
          "linear-gradient(to bottom, #0d0d12, #131219, #17161f, #1c1a26, #211d2c, #221e2e, #231e30, #241f32, #201d31, #1d1b30, #18192f, #14172e)",
        "gradient-space-ltb":
          "linear-gradient(to left bottom, #020207, #07060d, #0b0a12, #0f0e16, #131119, #16141c, #191720, #1c1923, #201d27, #25212b, #292630, #2e2a34)",
        "gradient-space-ltr":
          "linear-gradient(to right, #020207, #07060d, #0b0a12, #0f0e16, #131119, #16141c, #191720, #1c1923, #201d27, #25212b, #292630, #2e2a34)",
        "gradient-brush-1": "linear-gradient(to top, #cc208e 0%, #6713d2 100%)",
        "gradient-brush-2":
          "linear-gradient(to right, #ec77ab 0%, #7873f5 100%)",
        "gradient-brush-3":
          "linear-gradient(to right top, #051937, #032869, #2f329a, #6731c6, #a912eb)",
        "gradient-brush-4":
          "linear-gradient(to right top, #4f1492, #0063d8, #0098e7, #00c5c7, #12eb96)",
        "gradient-brush-5":
          "linear-gradient(to right top, #4f1492, #0063d8, #0098e7, #00c5c7, #12eb96)",
      }),
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        promt: ["Prompt", "sans-serif"],
        mitr: ["Mitr", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        albert: ["Albert Sans", "sans-serif"],
        redhat: ["Red Hat Text", "sans-serif"],
        ibmth: ["IBM Plex Sans Thai", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
    screens: {
      "2xs": "340px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
