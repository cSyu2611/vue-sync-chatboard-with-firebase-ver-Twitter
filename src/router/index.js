import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase"
import Home from '../views/Home.vue'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
    meta: {
      already: true
    }
  },
  {
    path: '/signIn',
    name: 'SigniIn',
    component: SignIn,
    meta: {
      already: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const already = to.matched.some(record => record.meta.already)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signIn',
          query: { redirect: to.fullPath }
        })
      }
    })
  }
  else if (already){
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  }
  else {
    next() // next() を常に呼び出すようにしてください!
  }
})



export default router
