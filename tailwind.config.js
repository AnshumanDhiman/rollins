/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme_1': '#0D0E10',
        'theme_2': '#365B64',
        'theme_3': '#A6C9CB',
        'theme_4': '#E7F6F1',
        'theme_5': '#FFFFFF',
      },
      animation: {
        marquee: 'marquee 65s linear infinite',
        marquee2: 'marquee2 65s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },

  plugins: [require('tailwindcss-animated')],
};