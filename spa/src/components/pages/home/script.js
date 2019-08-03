import { mapActions } from 'vuex'

export default {
  name: 'Home',

  methods: {
    ...mapActions([
      'getTest'
    ]),
    test() {
      this.getTest();
    }
  }
}
