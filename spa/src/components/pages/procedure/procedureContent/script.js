import { mapActions, mapState } from 'vuex'

export default {
  name: 'procedureContent',

  created: function () {
    // Retrieve procedure
    this.getProcedure()
  },

  computed: {
    // Watch for change in state
    ...mapState([
      'procedure'
    ])
  },

  methods: {
    // Dispatch request to retrieve procedure list
    ...mapActions([
      'getProcedure'
    ])
  }
}
