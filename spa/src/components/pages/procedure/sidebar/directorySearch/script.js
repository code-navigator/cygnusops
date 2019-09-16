import { mapState, mapActions } from 'vuex'

export default {
  name: 'directory',

  data: () => ({
    // Search input
    search: null
  }),

  mounted () {
    // Populate tree with procedures
    this.getProcedureList()
  },

  computed: {
    ...mapState('procedure', [
      'procedureList'
    ]),

    // Watch for change in procedure list
    items () {
      return this.procedureList
    }
  },

  methods: {
    ...mapActions('procedure', [
      'getProcedureList'
    ]),

    // Fetch procedure for selected node
    updateNode (node) {
      if (node[0] != null) {
        // Navigate to corresponding procedure
        this.$router.push('/procedures/' + node[0])
      }
    }
  }
}
