import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import light from './theme'

// Add Vuetify plugin
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    theme: {
      themes: { light }
    }
  }
})
