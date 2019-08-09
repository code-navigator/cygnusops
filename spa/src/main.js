import Vue from 'vue'
import vueSplitPanel from 'vue-split-panel'
import '@Plugins/axios'
import App from '@Layouts/app/index.vue'
import router from '@Router/router'
import store from '@Store/store'
import vuetify from '@Plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vueSplitPanel,
  render: h => h(App)
}).$mount('#app')
