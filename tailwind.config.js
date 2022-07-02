/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'primary': '#557afc',
      'white': '#fafafa',
      'gray': {
        'dark': '#2e2e2e',
        DEFAULT: '#7f7f7f',
        'light': '#bfbfbf',
      },
      'black': '#111111',
      'success': '#12dd70',
      'warning': '#ffac2f',
      'danger': '#ee4747'
    },
    extend: {
      fontFamily: {
        display: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
}
