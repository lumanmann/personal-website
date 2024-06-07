// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap' },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
  ],

  devtools: { enabled: true },
})
