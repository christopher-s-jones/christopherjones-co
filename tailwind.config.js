const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,ts,astro}'],
  theme: {
    extend: {
      // 'Inter Tight Variable'
      // 'Inter Variable'
      // 'Montserrat Variable'
      // 'Noto Serif Display Variable'
      // 'Open Sans Variable'
      // 'Playfair Display Variable'
      // 'Raleway Variable'
      // 'Source Code Pro Variable'
      fontFamily: {
        'sans': ['"Open Sans Variable"', ...defaultTheme.fontFamily.sans],
        'serif': ['"Raleway Variable"', ...defaultTheme.fontFamily.serif],
        'mono': ['"Source Code Pro Variable"', ...defaultTheme.fontFamily.mono]
      },
      backgroundImage: {
        'hero-background-light': "url('/img/bokeh-light-50.svg')",
        'hero-background-dark': "url('/img/bokeh-dark-25.svg')"
      },
      colors: {
        'astronaut': {
          '50': '#f3f5fb',
          '100': '#e3e8f6',
          '200': '#ced7ef',
          '300': '#acbce4',
          '400': '#849bd6',
          '500': '#677cca',
          '600': '#5362bd',
          '700': '#4952ac',
          '800': '#40458d',
          '900': '#383d72',
          '950': '#252746',
        },
        'tamarillo': {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fecaca',
          '300': '#fca5a5',
          '400': '#f87171',
          '500': '#ef4444',
          '600': '#dc2626',
          '700': '#b91c1c',
          '800': '#991b1b',
          '900': '#7f1d1d',
          '950': '#450a0a',
        },
        'gun-powder': {
          '50': '#f5f6f9',
          '100': '#e7e9f2',
          '200': '#d5d8e8',
          '300': '#b8bfd8',
          '400': '#959fc5',
          '500': '#7c83b5',
          '600': '#6a6da6',
          '700': '#5e5e97',
          '800': '#51507d',
          '900': '#3b3b58',
          '950': '#2d2c3f',
        },
        'ebony-clay': {
          '50': '#f4f6fa',
          '100': '#e6e9f3',
          '200': '#d4d8e9',
          '300': '#b6bfda',
          '400': '#939ec7',
          '500': '#7882b9',
          '600': '#666baa',
          '700': '#5a5c9b',
          '800': '#4e4e7f',
          '900': '#414267',
          '950': '#252537',
        },
        'rhino': {
          '50': '#f2f6fc',
          '100': '#e1ebf8',
          '200': '#cadcf3',
          '300': '#a6c5ea',
          '400': '#7ca7de',
          '500': '#5d89d4',
          '600': '#496fc7',
          '700': '#3f5db6',
          '800': '#384d95',
          '900': '#2b3a67',
          '950': '#222b49',
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