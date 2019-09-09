export default {
  name: 'appContent',

  data: () => ({
    activeTab: null
  }),

  watch: {
    activeTab (oldTab, newTab) {
      // if (oldTab) {
      //   console.log(oldTab)
      // }
      if (newTab) {
        console.log(newTab.replace(/\//,''))
      }
    }
  },

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
