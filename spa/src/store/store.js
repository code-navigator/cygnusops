import Vue from 'vue'
import Vuex from 'vuex'
import procedure from './procedure/index'
import main from './main/index'

Vue.use(Vuex)

export default new Vuex.Store({
  // Store is divided into modules
  // Each page has its own store
  modules: {
    main,
    procedure
  }
})
