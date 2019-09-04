export default {
  name: 'search',

  data: () => ({
    term: ''
  }),

  watch: {
    'term' (val, oldVal) {
      this.$store.dispatch(
        'procedure/searchByTerm',
        val
      )
    }
  },

  computed: {
    searchResults () {
      return this.$store.state.procedure.searchResults
    }
  }
}
