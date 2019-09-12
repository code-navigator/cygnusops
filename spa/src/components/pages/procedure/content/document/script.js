import { mapState, mapActions } from 'vuex'
import expandedSection from './expandedSection/index.vue'

export default {
  name: 'document',

  components: {
    expandedSection
  },

  mounted () {
    this.getData()
  },

  watch: {
    '$route' (to, from) {
      this.getData()
    }
  },

  methods: {
    ...mapActions('procedure', [
      'getProcedure'
    ]),
    // Retrieve data for current procedure
    getData () {
      // Retrieve procedure
      this.getProcedure()
    }
  },

  computed: {
    ...mapState('procedure', [
      'isLoading',
      'procedure'
    ]),

    // Data to pass as a prop
    sections () {
      if (this.isLoading) {
        // If axios is busy, do not render procedure
        return []
      } else {
        // Section markups
        return [
          {
            title: '1.0 Purpose & Scope',
            content: this.procedure.getScope()
          },
          {
            title: '2.0 Restrictions',
            content: this.procedure.getRestrictions()
          },
          {
            title: '3.0 References',
            content: this.procedure.getReferences()
          },
          {
            title: '4.0 Procedure',
            content: this.procedure.getContent()
          }
        ]
      }
    }
  }
}
