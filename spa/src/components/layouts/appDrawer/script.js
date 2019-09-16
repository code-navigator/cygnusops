export default {
  name: 'appDrawer',

  props: [
    'drawer',
    'routes'
  ],

  computed: {
    // A computed property is used to avoid
    // mutation of prop directly
    position: {
      get () {
        return this.drawer
      },
      set (newValue) {
      }
    }
  }
}
