import Home from '@Pages/home/index.vue'
import About from '@Pages/about/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    icon: 'folder'
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    icon: 'folder'
  }
]

export {
  routes
}
