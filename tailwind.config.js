const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        triple: 'rgb(255 255 255 / 30%) 5px 5px, rgb(255 255 255 / 20%) 10px 10px, rgb(255 255 255 / 10%) 15px 15px',
      },
      fontFamily: {
        sans: ['Microsoft YaHei', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'stone-950': '#0D0D0D',
        'neutral-950': '#0c0c0c',
        'blue-950': '#222364',
        'green-950': '#172E1B',
      },
      animation: {
        pulse1: 'pulse1 2s infinite',
        jump: 'jump 4s infinite',
      },
      keyframes: {
        pulse1: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
};
