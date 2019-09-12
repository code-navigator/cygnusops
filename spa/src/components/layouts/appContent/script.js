import { mapState, mapActions } from 'vuex'

export default {
  name: 'appContent',

  computed: {
    ...mapState('main', [
      'tabs'
    ])
  },

  methods: {
    ...mapActions('main', [
      'closeTab',
      'setTab'
    ])
  }
}
