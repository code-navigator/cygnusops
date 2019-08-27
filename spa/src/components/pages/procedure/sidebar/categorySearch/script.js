export default {
  name: 'category',

  data: () => ({
    radios: 'bid'
  }),

  mounted () {
    // Populate tree with procedures
    this.$store.dispatch('procedure/getCategoryList')
  },

  watch: {
    'radios' (val, oldVal) {
      this.$store.dispatch(
        'procedure/searchByCategory',
        val
      )
    }
  },

  computed: {
    // Watch for change in state
    categories () {
      return this.$store.state.procedure.categoryList
    }
  }
}
