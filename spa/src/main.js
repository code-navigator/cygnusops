import Vue from 'vue'
import App from '@Layouts/app/index.vue'
import router from '@Router/router'
import store from '@Store/store'
import vuetify from '@Plugins/vuetify/vuetify'
import '@Plugins/axios'
import '@Plugins/vueSplit'

// Turn off Vue production tip on startup
Vue.config.productionTip = false

// Root Vue instance
new Vue({
  router, // Vue-Router
  store, // Vuex
  vuetify, // Vuetify styling
  render: h => h(App)
}).$mount('#app')
