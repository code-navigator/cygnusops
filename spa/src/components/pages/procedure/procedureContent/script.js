import expandedSection from './expandedSection/index.vue'

export default {
  name: 'procedureContent',

  components: {
    expandedSection
  },

  created () {
    // Retrieve procedure
    this.$store.dispatch(
      'procedure/getProcedure',
      this.$route.params.slug
    )
  },

  computed: {
    // Procedure data
    procedure () {
      return this.$store.state.procedure.procedure
    },
    // Data to pass as a prop
    sections () {
      return [
        {
          title: '1.0 Purpose & Scope',
          class: 'scope',
          content: this.procedure.getScope()
        },
        {
          title: '2.0 Restrictions',
          class: 'restrictions',
          content: this.procedure.getRestrictions()
        },
        {
          title: '3.0 References',
          class: 'references',
          content: this.procedure.getReferences()
        },
        {
          title: '4.0 Procedure',
          class: 'procedure',
          content: this.procedure.getContent()
        }
      ]
    }
  }
}
