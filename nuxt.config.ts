import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  app: {
    // head
    head: {
      title: 'MonsterABC',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'baidu-site-verification',
          content: 'codeva-dDJttuF1lK',
        },
        {
          name: 'google-site-verification',
          content: 'NhwUG7PCreYIU7GAF52lOSQWZ4r10z9KdCj1KwMnPPo',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'MonsterABC 怪兽英语 随时随地开启在线课程',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  srcDir: 'src',
  devtools: true,
  // css
  css: ['~/assets/scss/index.scss'],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // pinia plugin - https://pinia.esm.dev
    '@pinia/nuxt',
    // unocss plugin - https://github.com/unocss/unocss
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    // https://github.com/huntersofbook/huntersofbook/tree/main/packages/naive-ui-nuxt
    '@huntersofbook/naive-ui-nuxt',
  ],
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  // colorMode
  colorMode: {
    classSuffix: '',
  },
  build: {
    transpile: ['@headlessui/vue'],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-turkey'],
  },

  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      { code: 'tr', file: 'tr-TR.json' },
    ],
    defaultLocale: 'tr',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    // vueI18n: {
    //   legacy: false,
    //   locale: 'tr',
    //   fallbackLocale: 'tr',
    //   availableLocales: ['en', 'tr'],
    // },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './type.d.ts'],
      },
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },

  tailwindcss: {
    configPath: './tailwind.config.js',
  },

  vite: {
    logLevel: 'info',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/element/index.scss" as element;',
        },
      },
    },
    server: {
      proxy: {
        '^/api': {
          target: 'https://manager.islepal.cn/', // 这里是接口地址
          changeOrigin: true,
        },
      },
    },
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    // themes: ["dark"],
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
    },
  },
})
