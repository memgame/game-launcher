
const routes = [
  {
    path: '/profile',
    component: () => import('layouts/LayoutMain.vue'),
    children: [
      { path: '', component: () => import('pages/PageProfile.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/store',
    component: () => import('layouts/LayoutMain.vue'),
    children: [
      { path: '', component: () => import('pages/PageStore.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    component: () => import('layouts/LayoutMain.vue'),
    children: [
      { path: '', component: () => import('pages/PageSettings.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LayoutBasic.vue'),
    children: [
      { path: '', component: () => import('pages/PageLogin.vue') }
    ]
  },
  {
    path: '/logout',
    name: 'Logout'
  },
  {
    path: '*',
    redirect: '/profile'
  }
]

/*
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
*/

export default routes
