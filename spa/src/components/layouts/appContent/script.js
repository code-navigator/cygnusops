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
    },
    ClickEvent (tab) {
      this.$store.commit('procedure/openMainTab', tab)
    }
  }
}
