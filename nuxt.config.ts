// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'nuxt-lodash',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-typed-router',
    '@nuxtseo/module',
  ],
  components: {
    dirs: ['~/components', '~/composables', '~/ctx', '~/utils'],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  css: ['~/scss/main.scss'],
  pwa: {
    scope: '/',
    base: '/',
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    manifest: {
      name: 'Sloppy',
      short_name: 'Sloppy',
      description: 'Sloppy',
      theme_color: '#000',
      background_color: '#000',
      icons: [
        {
          src: 'icon-48x48.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icon-72x72.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icon-144x144.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    },
    registerWebManifestInRouteRules: true,
    workbox: {
      navigateFallback: undefined,
      cleanupOutdatedCaches: true,
      globPatterns: [
        '**/*.{json,ico,svg,ttf,woff,css,scss,js,html,txt,jpg,png,woff2,mjs,otf,ani}',
      ],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
        },
        {
          urlPattern: /^https:\/\/api\.mapbox\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'mapbox-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    client: {
      installPrompt: false,
      periodicSyncForUpdates: 20, //seconds
    },
    devOptions: {
      enabled: true,
      suppressWarnings: false,
      navigateFallback: 'index.html',
      type: 'module',
    },
  },
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#000' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
        },
        {
          name: 'description',
          content:
            'Sloppy - Web developer',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'default' },
    layoutTransition: { name: 'layout', mode: 'default' },
  },
  image: {
    format: ['webp'],
  },
  lodash: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: false,
    exclude: ['map'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
      ['kebabCase', 'stringToKebab'], // => stringToKebab
      ['isDate', 'isLodashDate'], // => _isLodashDate
    ],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage',
  },
  plugins: [{ src: '~/plugins/scrollbar', mode: 'client' }],
  site: {
    name: 'Sloppy',
  },
});
