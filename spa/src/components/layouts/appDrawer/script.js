import { mapActions } from 'vuex'

export default {
  name: 'appDrawer',

  props: [
    'drawer',
    'routes'
  ],

  methods: {
    ...mapActions('main', [
      'openTab'
    ])
  }
}
