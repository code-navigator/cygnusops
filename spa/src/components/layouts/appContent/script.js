export default {
  name: 'appContent',

  computed: {
    tabs () {
      return this.$store.state.procedure.mainTabs
    }
  },

  methods: {
    closeTab (index) {
      this.$store.commit('procedure/closeMainTab', index)
    }
  }
}
