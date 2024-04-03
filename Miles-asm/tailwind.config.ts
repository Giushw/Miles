import type { Config } from 'tailwindcss';

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content:  [
    // './public/index.html',
    // './src/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        anybody: ['"Anybody"', ...defaultTheme.fontFamily.sans],
        raleway : ['"Raleway"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
} satisfies Config;
