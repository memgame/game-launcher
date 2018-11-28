import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import store from '@/store'
import PageLogin from '@/pages/PageLogin'
import PageHome from '@/pages/PageHome'
import PagePlay from '@/pages/PagePlay'
import PageStore from '@/pages/PageStore'
import PageSettings from '@/pages/PageSettings'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: PageHome,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/play',
      name: 'Play',
      component: PagePlay,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/store',
      name: 'Store',
      component: PageStore,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: PageSettings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: PageLogin
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        if (!store.state.User.isAnonymous) {
          firebase.auth().signOut()
          store.dispatch('logout')
          next('login')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.state.User.isAnonymous) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
