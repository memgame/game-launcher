
const routes = [
  {
    path: '/home',
    component: () => import('layouts/LayoutMain.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue') }
    ]
  },
  {
    path: '/store',
    component: () => import('layouts/LayoutMain.vue'),
    children: [
      { path: '', component: () => import('pages/PageStore.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LayoutMain.vue'),
    children: [
      { path: '', component: () => import('pages/PageLogin.vue') }
    ]
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: (to, from, next) => {
      next('/login')
      /*
      if (!store.state.User.isAnonymous) {
        firebase.auth().signOut()
        store.dispatch('logout')
        next('login')
      } else {
        next('/login')
      }
      */
    }
  },
  {
    path: '*',
    redirect: '/home'
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
