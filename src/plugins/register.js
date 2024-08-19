import { router } from '../router'
import { pinia } from './pinia'
import { i18n } from './i18n'
import { axiosInstance } from './vue-axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import { primeVueConfig } from './primevue'
import Ripple from 'primevue/ripple'
import { pageTitle } from './pageTitle'

export const registerPlugins = app => {
  app.use(router)
  app.use(pinia)
  app.use(VueAxios, axiosInstance)
  app.use(PrimeVue, primeVueConfig)
  app.directive('ripple', Ripple)
  app.use(i18n)
  app.use(pageTitle)
}