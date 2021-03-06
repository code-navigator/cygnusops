import Home from '@Pages/home/index.vue'
import About from '@Pages/about/index.vue'
import Procedure from '@Pages/procedure/index.vue'
import Specification from '@Pages/specification/index.vue'

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

  {
    path: '/procedures',
    url: '/procedures',
    name: 'procedures',
    component: Procedure,
    icon: 'mdi-folder',
    meta: {
      store: 'procedure'
    },
    children: [
      {
        path: '/procedures/:slug',
        component: Procedure,
        meta: {
          store: 'procedure'
        }
      }
    ]
  },

  {
    path: '/specifications',
    url: '/specifications',
    name: 'specifications',
    component: Specification,
    icon: 'mdi-folder'
  }
]

export {
  routes
}
