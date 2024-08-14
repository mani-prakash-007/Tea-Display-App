/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "darjeeling-tea": "url('./src/assets/Darjeeling.png')",
        "matcha-tea": "url('./src/assets/Matcha.jpg')",
        "oolong-tea": "url('./src/assets/Oolong.webp')",
        "rooibos-tea": "url('./src/assets/Rooibos.jpg')",
        "chamomile-tea": "url('./src/assets/Chamomile.jpg')",
        "tea-background": "url('./src/assets/TeaEstateBackground.jpg')",
      },
    },
  },
  plugins: [],
};
