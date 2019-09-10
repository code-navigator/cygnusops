export default {
  name: 'appDrawer',

  props: [
    'drawer',
    'routes'
  ],

  computed: {
    position: {
      get () {
        return this.drawer
      },
      set (newValue) {
      }
    }
  },

  methods: {
    openTab (tabName, tabUrl) {
      this.$store.dispatch('procedure/openMainTab', { name: tabName, url: tabUrl })
    }
  }
}
