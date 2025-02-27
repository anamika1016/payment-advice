/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        background: "var(--color-background)",
        backgroundGray: "var(--color-backgroundGray)",
        gray: "var(--color-gray)",
        grayLight: "var(--color-grayLight)",
        adminBackground: "var(--color-adminBackground)",
      },
    },
  },
  plugins: [],
};
