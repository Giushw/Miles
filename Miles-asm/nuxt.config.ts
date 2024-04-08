// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {enabled: false},
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module'
  ],
  css: [
    '@/assets/css/main.css',
  ]
});


