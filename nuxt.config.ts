// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Ruluko&family=Ruthie&display=swap',
        },
      ],
    },
  },
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
})
