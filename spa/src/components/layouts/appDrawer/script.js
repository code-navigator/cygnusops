import { mapActions } from 'vuex'

export default {
  name: 'appDrawer',

  props: [
    'drawer',
    'routes'
  ],

  computed: {
    // Drawer position (boolean; true=show drawer)
    position: {
      get () {
        return this.drawer
      },
      set (newValue) {
      }
    }
  },

  methods: {
    ...mapActions('main', [
      'openMainTab'
    ]),

    // Open a new tab
    openTab (tabName, tabUrl) {
      this.openMainTab(
        {
          name: tabName,
          url: tabUrl
        }
      )
    }
  }
}
