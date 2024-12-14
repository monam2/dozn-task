/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
      fontSize: {
        root: "12px",
        "heading-1": "52px",
        "heading-2": "48px",
        "heading-3": "30px",
        "heading-4": "24px",
        "content-1": "18px",
        "content-2": "16px",
        "content-3": "14px",
      },
      colors: {
        primary: "#007AFE",
        "primary-hover": "#006EE6",
        background: "#F4FAFF",
        footer: "#39364E",
        error: "#CD212A",
        black: {
          DEFAULT: "#302F33",
          100: "rgba(0, 0, 0, 0.1)",
          200: "rgba(0, 0, 0, 0.2)",
          300: "rgba(0, 0, 0, 0.3)",
          400: "rgba(0, 0, 0, 0.4)",
          500: "rgba(0, 0, 0, 0.5)",
          650: "rgba(0, 0, 0, 0.65)",
          750: "rgba(0, 0, 0, 0.75)",
          900: "#000000",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(255, 255, 255, 0.4)",
          500: "rgba(255, 255, 255, 0.5)",
          650: "rgba(255, 255, 255, 0.65)",
          750: "rgba(255, 255, 255, 0.75)",
        },
        gray: {
          DEFAULT: "#9BA3B7",
          50: "#EBEEF5",
          100: "#C3C8D4",
          200: "#A8AEBF",
          300: "#8E95A9",
          400: "#767E94",
          500: "#61697F",
          600: "#475069",
          700: "#323B54",
        },
      },
      borderRadius: {
        button: "10px",
      },
      padding: {
        buttonY: "8px",
      },
    },
  },
  plugins: [],
};
