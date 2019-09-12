<script>
import Vue from 'vue'

export default {
  name: 'templateCompiler',

  props: [
    'content'
  ],

  // Compile and render vue template as html
  render (h) {
    return h(Vue.compile(this.content))
  }
}
</script>
