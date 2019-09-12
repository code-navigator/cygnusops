import { mapState, mapActions } from 'vuex'

export default {
  name: 'appContent',

  computed: {
    ...mapState('main', [
      'mainTabs'
    ]),

    tabs () {
      return this.mainTabs
    }
  },

  methods: {
    ...mapActions('main', [
      'closeMainTab',
      'setActiveTab'
    ]),

    // Delete tab
    closeTab (index) {
      this.closeMainTab(index)
    },

    // Move to another tab
    changeTab (index) {
      this.setActiveTab(index)
    }
  }
}
