import { pageTitle as title } from 'vue-page-title'

export const pageTitle = title({
  suffix: ` | ${import.meta.env.VITE_APP_TITLE}`,
  mixin: true,
})