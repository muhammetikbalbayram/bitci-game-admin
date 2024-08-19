import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './routes'
import { useMainStore } from '../store/main'

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const mainStore = useMainStore()
  const loginRequired = to.meta?.loginRequired
  if(!mainStore.isLogin && loginRequired) {
    next({ name: 'Login' })
    return
  }
  else if(mainStore.isLogin && !loginRequired) {
    next({ name: 'Dashboard'})
    return
  }
  next()
})