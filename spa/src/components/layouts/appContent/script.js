export default {
  name: 'appContent',

  computed: {
    tabs () {
      return this.$store.state.main.mainTabs
    }
  },

  methods: {
    closeTab (index) {
      this.$store.dispatch('main/closeMainTab', index)
    },

    changeTab (index) {
      this.$store.commit('main/setActiveTab', index)
    }
  }
}
