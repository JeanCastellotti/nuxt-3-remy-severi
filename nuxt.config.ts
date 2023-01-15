// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Ruluko&family=Ruthie&display=swap',
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
})
