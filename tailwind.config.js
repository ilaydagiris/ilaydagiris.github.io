/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#C1E0F7",  // Ghibli mavisi
        foreground: "#2C3A47",  // Koyu mavi
        accent: "#E8A735",      // Altın sarısı
        navbar: "#F8E8C6",      // Krem rengi
        hover: "#5C755E",       // Ghibli yeşili
      },
      fontFamily: {
        title: ["Sawarabi Mincho", "serif"],
        body: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 