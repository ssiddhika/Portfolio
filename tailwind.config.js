/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'currentColor' },
        },
      },
      animation: {
        typewriter: 'typewriter 2s steps(10, end) 1s 1 normal both, blink 1s step-end infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "garden",
      "dracula",
    ],
  },
};
