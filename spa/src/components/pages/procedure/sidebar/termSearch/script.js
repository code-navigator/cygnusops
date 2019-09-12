import { mapState, mapActions } from 'vuex'

export default {
  name: 'search',

  data: () => ({
    // Search term
    term: ''
  }),

  watch: {
    // Watch for changes in search term
    'term' (val, oldVal) {
      this.searchByTerm(val)
    }
  },

  computed: {
    ...mapState('procedure', [
      'searchResults'
    ])
  },

  methods: {
    ...mapActions('procedure', [
      'searchByTerm'
    ])
  }
}
