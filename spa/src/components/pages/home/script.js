import { mapActions } from 'vuex'

export default {
  name: 'Home',

  methods: {
    ...mapActions([
      'getTest'
    ]),
    test: function() {
      this.getTest();
    }
  }
}
