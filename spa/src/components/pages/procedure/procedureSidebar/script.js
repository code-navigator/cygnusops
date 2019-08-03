export default {
  name: 'procedureSidebar',

  created: function () {
    // Populate tree with procedures
    this.$store.dispatch('getProcedureList')
  },

  computed: {
    // Watch for change in state
    items() {
      return this.$store.state.procedureList
    }
  }
}
