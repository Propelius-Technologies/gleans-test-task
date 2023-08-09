/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ga-grey': '#d9d9d9',
        'ga-text-gray': '#b9b9b9',
        'ga-button-grey': '#2A2A2A',
        'ga-success': '#00FF85',
      },
      fontFamily: {
        primary: ['var(--font-roboto)'],
      },
      fontSize: {
        '32px': '2rem',
      },
      animation: {
        blur: 'blur 400ms ease-in-out forwards',
      },
      keyframes: {
        blur: {
          '0%': { 'backdrop-filter': 'blur(0px)' },
          '100%': { 'backdrop-filter': 'blur(50px)' },
        },
      },
    },
  },
  plugins: [],
};
