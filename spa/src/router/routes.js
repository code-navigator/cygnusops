import Home from '@Pages/home/index.vue'
import About from '@Pages/about/index.vue'

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
  }
]

export {
  routes
}
