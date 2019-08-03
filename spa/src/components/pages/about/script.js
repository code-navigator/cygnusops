import { mapActions, mapState } from 'vuex'

export default {
  name: 'About',

  data () {
    return {
      text: '',
      revision: ''
    }
  },

  computed: {
    ...mapState([
      'procedure'
    ])
  },

  created() {
    this.getProcedure()
  },

  methods: {
    ...mapActions([
      'getProcedure'
    ])
  }
}
