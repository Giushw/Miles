// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {enabled: false},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module'
  ],
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    // TODO: find why this generate a bug with layout breaking only on first render
    // pageTransition: {name: 'page', mode: 'out-in'},
    // layoutTransition: {name: 'layout', mode: 'out-in'}
  }
});


