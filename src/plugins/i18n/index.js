import { createI18n } from 'vue-i18n'
import { en } from './en'
import { tr } from './tr'

export const i18n = createI18n({
  locale: 'tr',
  fallbackLocale: 'en',
  messages: {
    en,
    tr
  }
})