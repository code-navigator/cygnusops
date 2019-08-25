export default {
  name: 'category',

  data: () => ({
    radios: null
  }),

  mounted () {
    // Populate tree with procedures
    this.$store.dispatch('procedure/getCategoryList')
  },

  computed: {
    // Watch for change in state
    categories () {
      return this.$store.state.procedure.categoryList
    }
  }
}
