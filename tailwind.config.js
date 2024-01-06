/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        netflix: [
          "Netflix Sans",
          "Helvetica Neue",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "sans-serif",
        ],
      },
      backgroundImage: {
        netflixImg: "url(./src/assets/netfliximg.jpg)",
      },
    },
  },
  plugins: [],
};
