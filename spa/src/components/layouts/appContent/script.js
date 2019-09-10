export default {
  name: 'appContent',

  computed: {
    tabs () {
      return this.$store.state.procedure.mainTabs
    }
  },

  methods: {
    closeTab (index) {
      this.$store.dispatch('procedure/closeMainTab', index)
    },

    changeTab (index) {
      this.$store.commit('procedure/setActiveTab', index)
    }
  }
}
