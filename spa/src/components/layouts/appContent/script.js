export default {
  name: 'appContent',

  computed: {
    tabs () {
      return this.$store.state.mainTabs
    }
  },

  methods: {
    closeTab (index) {
      this.$store.commit('closeMainTab', index)
    }
  }
}
