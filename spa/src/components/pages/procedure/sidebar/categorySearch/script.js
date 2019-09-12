import { mapState, mapActions } from 'vuex'

export default {
  name: 'category',

  data: () => ({
    // Selected category
    radios: 'bid'
  }),

  mounted () {
    // Populate tree with procedures
    this.getCategoryList()
  },

  watch: {
    // Watch for change in selected category
    'radios' (val, oldVal) {
      this.searchByCategory(val)
    }
  },

  computed: {
    ...mapState('procedure', [
      'categoryList',
      'searchResults'
    ]),

    // Watch for change in state
    categories () {
      return this.categoryList
    }
  },

  methods: {
    ...mapActions('procedure', [
      'getCategoryList',
      'searchByCategory'
    ])
  }
}
