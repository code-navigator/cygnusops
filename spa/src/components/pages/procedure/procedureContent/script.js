import expandedSection from '@Controls/expandedSection/index.vue'

export default {
  name: 'procedureContent',

  components: {
    expandedSection
  },

  created () {
    // Retrieve procedure
    this.$store.dispatch('getProcedure')
  },

  computed: {
    // Procedure data
    procedure () {
      return this.$store.state.procedure
    },
    // Data to pass as a prop
    sections () {
      return [
        {
          title: '1.0 Purpose & Scope',
          content: this.procedure.scope
        },
        {
          title: '2.0 Restrictions',
          content: this.procedure.restrictions
        },
        {
          title: '3.0 References',
          content: this.procedure.references
        },
        {
          title: '4.0 Procedure',
          content: this.procedure.content
        }
      ]
    }
  }
}
