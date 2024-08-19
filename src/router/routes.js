export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue'),
    meta: {
      loginRequired: false,
      layout: 'DefaultLayout'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/index.vue'),
    meta: {
      loginRequired: true,
      layout: 'GlobalLayout'
    }
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games/index.vue'),
    meta: {
      loginRequired: true,
      layout: 'GlobalLayout'
    }
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/Reports/index.vue'),
    meta: {
      loginRequired: true,
      layout: 'GlobalLayout'
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/Notifications/index.vue'),
    meta: {
      loginRequired: true,
      layout: 'GlobalLayout'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/dashboard'
  }
]