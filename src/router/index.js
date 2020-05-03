import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase"
import Home from '../views/Home.vue'
import HomeNeedsLogin from '../views/HomeNeedsLogin.vue'

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
    component: HomeNeedsLogin,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signUp',
          query: { redirect: to.fullPath }
        })
      }
    })
  }
  else {
    next() // next() を常に呼び出すようにしてください!
  }
})



export default router
