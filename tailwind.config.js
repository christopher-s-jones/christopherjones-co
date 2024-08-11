import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "selector",
  content: ['./src/**/*.{html,js,ts,tsx,astro}'],
  theme: {
    extend: {
      screens: {
        '3xl': '2561px'
      },
      fontFamily: {
        'sans': ['"Roboto Flex Variable"', ..._fontFamily.sans],
        'serif': ['"Roboto Flex Variable"', ..._fontFamily.serif],
        'mono': ['"Source Code Pro Variable"', ..._fontFamily.mono]
      },
      backgroundImage: {
        'sunflare-background-light': 'url("/img/sunflare.svg")',
        'starfield-background': 'url("/img/starfield.svg")',
        'starfield-background-sm': 'url("/img/starfield-sm.svg")',
        'starfield-background-md': 'url("/img/starfield-md.svg")'
      },
      colors: {
        'blue': {
          '960': '#111B3D',
          '975': '#0D142E'
        },
        'midnight': {
          '50': '#e9f9ff',
          '100': '#cff1ff',
          '200': '#a9eaff',
          '300': '#6edfff',
          '400': '#2ac8ff',
          '500': '#00a3ff',
          '600': '#007aff',
          '700': '#0060ff',
          '800': '#0050e2',
          '900': '#004ab0',
          '950': '#011c41',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
