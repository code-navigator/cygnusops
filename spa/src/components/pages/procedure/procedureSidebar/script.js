export default {
  name: 'procedureSidebar',

  data: () => ({
    search: null
  }),

  created () {
    // Populate tree with procedures
    this.$store.dispatch('getProcedureList')
  },

  computed: {
    // Watch for change in state
    items () {
      return this.$store.state.procedureList
    }
  },

  methods: {
    updateNode (node) {
      if (node[0] != null) {
        this.$router.push(node[0])
        this.$store.dispatch('getProcedure', node[0])
      }
    }
  }
}
