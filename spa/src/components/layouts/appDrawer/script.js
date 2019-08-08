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
    addTab (tabName) {
      this.$store.commit('addMainTab', { name: tabName })
    }
  }
}
