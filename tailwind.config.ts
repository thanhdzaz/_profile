import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './app/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cuz: 'Cuz',
        au: 'August',
        ['space-mono']: 'SpaceMono',
      },
      keyframes: {
        loading: {
          '0%': { left: '-100%', width: '100%' },
          '100%': { left: '100%', width: '100%' },
        },
        flicker: {
          '0%': {
            textShadow: '2px 0 0 #ea36af , -2px 0 0 #75fa69',
          },
          '100%': {
            textShadow: '-4px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69',
          },
        },
      },
      animation: {
        loading: 'loading 1s ease-in-out infinite',
        flicker: 'flicker 0.01s ease infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;
