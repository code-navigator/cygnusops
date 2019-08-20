<script>
import Vue from 'vue'

export default {
  name: 'templateCompiler',
  props: [
    'content'
  ],
  render (h) {
    return h(Vue.compile(this.content))
  }
}
</script>
