export default {
  name: 'appContent',

  computed: {
    tabs () {
      return this.$store.state.mainTabs
    }
  }
}
