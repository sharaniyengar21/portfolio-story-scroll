/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0a0a23',
          light: '#1f1f3d',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          dark: '#e5e5e5',
        },
      },
    },
  },
  plugins: [],
};
