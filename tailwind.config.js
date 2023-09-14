/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryDark: "#001C30",
      secondaryDark: "#176B87",
      primaryLight: "#64CCC5",
      secondaryLight: "#DAFFFB",
      Pblack: "#020617",
    },
  },
  plugins: [],
};
