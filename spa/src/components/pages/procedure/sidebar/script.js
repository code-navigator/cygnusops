import termSearch from './termSearch/index.vue'
import directorySearch from './directorySearch/index.vue'
import categorySearch from './categorySearch/index.vue'

export default {
  name: 'sidebar',

  components: {
    categorySearch,
    directorySearch,
    termSearch
  }
}
