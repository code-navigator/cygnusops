import Vue from 'vue'
import '@Plugins/axios'
import App from './App.vue'
import router from '@Router/router'
import store from '@Store/store'
import vuetify from '@Plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
