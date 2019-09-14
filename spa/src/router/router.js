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
  // Search for existing tab
  const found = store.state.main.tabs.find(tab => {
    return to.path === tab.url
  })

  // Open new tab if it does not exist and the slug is empty
  if (!found && Object.keys(to.params).length === 0) {
    store.dispatch(
      'main/openTab',
      { name: to.name, url: to.path }
    )
  }

  // Retrieve contents from store
  if (Object.keys(to.meta).length && to.meta.hasOwnProperty('store')) {
    store.dispatch(
      to.meta.store + '/getContents',
      to.params.slug
    )
  }

  next()
})

export default router
