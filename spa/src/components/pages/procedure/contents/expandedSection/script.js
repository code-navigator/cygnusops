import templateCompiler from '@Controls/templateCompiler/index.vue'

export default {
  name: 'expandedSection',

  components: {
    templateCompiler
  },

  props: [
    'sections'
  ]
}
