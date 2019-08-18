import Home from '@Pages/home/index.vue'
import About from '@Pages/about/index.vue'
import Procedure from '@Pages/procedure/index.vue'

const routes = [
  {
    path: '/',
    url: '/',
    name: 'home',
    component: Home,
    icon: 'mdi-folder'
  },
  {
    path: '/about',
    url: '/about',
    name: 'about',
    component: About,
    icon: 'mdi-folder'
  },
  // {
  //   path: '/procedures/blank',
  //   name: 'procedures',
  //   component: Procedure,
  //   icon: 'mdi-folder'
  // },
  {
    path: '/procedures/:slug?',
    url: '/procedures',
    name: 'procedure',
    component: Procedure,
    icon: 'mdi-folder'
  }
]

export {
  routes
}
