import templateCompiler from '@Controls/templateCompiler/index.vue'

export default {
  name: 'expandedSection',

  components: {
    templateCompiler
  },

  computed: {
    expanded: {
      get () {
        return this.sections.expanded
      },
      set (newValue) {
        this.$emit('click', newValue)
      }
    }
  },

  props: [
    'sections'
  ]
}
