import type {Config} from 'tailwindcss';

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
        spinnaker: ['Spinnaker', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
