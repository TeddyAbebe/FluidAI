/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}", // Fixed curly braces for multiple extensions
  ],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1058px" },
      sm: { max: "558px" },
    },
    extend: {
      colors: {
        black: {
          8: "var(--black-0)",
          1: "var(--black-1)",
          900: "var(--black-900)",
          "900_80": "var(--black-900-80)",
          "900_99": "var(--black-900-99)",
          "900_b2": "var(--black-900-b2)",
        },
        blue: { a400: "var(--blue-a400)" },
        blue_gray: {
          100: "var(--blue-gray-100)",
          400: "var(--blue-gray-400)",
          800: "var(--blue-gray-800)",
          900: "var(--blue-gray-900)",
        },
        deep_orange: {
          300: "var(--deep-orange-300)",
          800: "var(--deep-orange-800)",
        },
        gray: {
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          "400_80": "var(--gray-400-80)",
          "400_66": "var(--gray-400-66)",
          "700_4c": "var(--gray-700-4c)",
          "900_19": "var(--gray-900-19)",
          "900_19_01": "var(--gray-900-19-01)",
          "900_33": "var(--gray-900-33)",
          "900_4c": "var(--gray-900-4c)",
          "900_99": "var(--gray-900-99)",
        },
        green: { a700: "var(--green-a700)" },
        indigo: { 400: "var(--indigo-400)" },
        lime: { "100_7f": "var(--lime-100-7f)" },
        white: "var(--white)",
        white_10: "var(--white-10)",
        white_20: "var(--white-20)",
        white_40: "var(--white-40)",
        white_60: "var(--white-60)",
        color_white: {
          a700: "var(--color-white-a700)",
          a700_7f: "var(--color-white-a700-7f)",
          a700_9b: "var(--color-white-a700-9b)",
          a700_e5: "var(--color-white-a700-e5)",
        },
      },
      boxShadow: { xs: "0 5px 30px 0 #ffffff9b" },
      fontFamily: { sfprodisplay: "SF Pro Display", sfprotext: "SF Pro Text" },
      backgroundImage: {
        gradient: "linear-gradient(188deg, #000000, #66000096)",
        gradient1: "linear-gradient(187deg, #bababa96, #bababa66)",
        gradient2: "linear-gradient(179deg, #00000098, #000000b2)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
