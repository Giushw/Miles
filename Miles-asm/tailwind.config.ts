import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
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
