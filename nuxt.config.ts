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
  runtimeConfig: {
    public: {
      emailJsServiceId: process.env.EMAIL_JS_SERVICE_ID,
      emailJsTemplateId: process.env.EMAIL_JS_TEMPLATE_ID,
      emailJsPublicKey: process.env.EMAIL_JS_PUBLIC_KEY,
    },
  },
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
})
