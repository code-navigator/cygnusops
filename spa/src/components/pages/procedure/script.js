import procedureContent from './procedureContent'
import procedureSidebar from './procedureSidebar'

export default {
  name: 'procedure',

  components: {
    procedureContent,
    procedureSidebar
  },

  computed: {
    // Render templates only after promises are resolved
    isLoading () {
      return (
        this.$store.state.procedure.title != null &&
        this.$store.state.procedureList != null
      )
    }
  }
}
