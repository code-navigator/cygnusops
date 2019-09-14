import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from '@Store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

router.beforeEach((to, from, next) => {
  const found = store.state.main.tabs.find((tab) => {
    return to.path === tab.url
  })

  if (!found && Object.keys(to.params).length === 0) {
    store.dispatch(
      'main/openTab',
      { name: to.name, url: to.path }
    )
  }

  next()
})

export default router
