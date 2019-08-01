import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({
    items: []
  }),

  created: async function () {
    await this.getTest()
    console.log(this.menu)
    this.items = this.menu
  },

  computed: {
    ...mapState([
      'menu'
    ])
  },

  methods: {
    ...mapActions([
      'getTest'
    ]),
  }
}
