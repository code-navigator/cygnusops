import { mapActions, mapState } from 'vuex'

export default {
  name: 'procedureSidebar',
  data: () => ({
    // Nested structure for treeview
    items: []
  }),

  created: async function () {
    // Populate tree with procedures
    await this.getProcedureList()
    this.items = this.procedureList
  },

  computed: {
    // Watch for change in state
    ...mapState([
      'procedureList'
    ])
  },

  methods: {
    // Dispatch request to retrieve procedure list
    ...mapActions([
      'getProcedureList'
    ])
  }
}
