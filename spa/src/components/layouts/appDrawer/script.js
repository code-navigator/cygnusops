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
    openTab (tabName) {
      this.$store.commit('procedure/openMainTab', { name: tabName })
    }
  }
}
