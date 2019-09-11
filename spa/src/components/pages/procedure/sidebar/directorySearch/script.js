export default {
  name: 'directory',

  data: () => ({
    search: null
  }),

  mounted () {
    // Populate tree with procedures
    this.$store.dispatch('procedure/getProcedureList')
  },

  computed: {
    // Watch for change in state
    items () {
      return this.$store.state.procedure.procedureList
    }
  },

  methods: {
    // Fetch procedure for selected node
    updateNode (node) {
      if (node[0] != null) {
        this.$router.push('/procedures/' + node[0])
        this.$store.dispatch('procedure/getProcedure', node[0])
      }
    }
  }
}
