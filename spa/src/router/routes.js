import Home from '@Pages/home/index.vue'
import About from '@Pages/about/index.vue'
import Procedure from '@Pages/procedure/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    icon: 'mdi-folder'
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    icon: 'mdi-folder'
  },
  {
    path: '/procedure/blank',
    name: 'procedure/blank',
    component: Procedure,
    icon: 'mdi-folder'
  },
  {
    path: '/procedure/:slug',
    name: 'procedure',
    component: Procedure,
    icon: 'mdi-folder'
  }
]

export {
  routes
}
