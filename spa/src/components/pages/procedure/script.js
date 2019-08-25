import contents from './content'
import sidebar from './sidebar'

export default {
  name: 'procedure',

  components: {
    contents,
    sidebar
  },

  computed: {
    // Render templates only after promises are resolved
    isLoading () {
      return (
        this.$store.state.procedure.procedure.title != null &&
        this.$store.state.procedure.procedureList != null
      )
    }
  }
}
