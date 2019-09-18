import { mapState, mapActions } from 'vuex'
import expandedSection from './expandedSection/index.vue'

export default {
  name: 'contents',

  components: {
    expandedSection
  },

  methods: {
    ...mapActions('procedure', [
      'setExpanded'
    ])
  },

  computed: {
    ...mapState('main', [
      'activeTab',
      'isLoading'
    ]),

    procedure () {
      return this.activeTab.contents
    },

    space () {
      return this.activeTab.space
    },

    // Data to pass as a prop
    sections () {
      if (this.isLoading) {
        // If axios is busy, do not render procedure
        return []
      } else {
        // Section markups
        return {
          expanded: this.space.expanded,
          sections: [
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
}
