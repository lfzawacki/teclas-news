import { useApp, defineOptions } from 'aeria-ui'
import aeriaEn from '@aeria-ui/i18n-en'
import { en } from './i18n/index.js'
import { routes } from './routes.js'
import Main from './main.vue'
import NoResults from './components/no-results.vue'

const options = defineOptions({
  component: Main,
  routes,
  i18n: {
    current: 'en',
    locales: {
      en: [
        aeriaEn,
        en,
      ],
    },
  },
})

useApp(options).then(({ app, mount }) => {
  app.provide('noResultsComponent', NoResults)
  mount()
})

