export default {
  name: 'procedureContent',

  created () {
    // Retrieve procedure
    this.$store.dispatch('getProcedure')
  },

  computed: {
    procedure () {
      return this.$store.state.procedure
    }
  }
}
