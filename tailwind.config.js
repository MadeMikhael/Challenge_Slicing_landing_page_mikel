/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","dashboardAdmin.html","js/dashboard.js","js/script.js"],
  theme: {
    extend: {
      colors: {
        primary: "#DA1212",
        secondary: "#F8F9FC",
        card: "#F2F1F1",
      },
    },
  },
  plugins: [],
}

