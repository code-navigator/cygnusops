import ProcedureClass from '@Models/procedures'
import api from '@Api/api'
import router from '@Router/router'

export default {
  // Retrieve data for current procedure
  async getProcedure ({ commit }) {
    const slug = router.currentRoute.params.slug

    commit(
      'setIsLoading',
      true
    )
    const data = await api.get('wp-json/wp/v2/procedures?slug=' + slug)
    // Save data to state
    await commit(
      'setProcedure',
      new ProcedureClass(data[0])
    )
    await commit(
      'setIsLoading',
      false
    )
  },

  // Retrieve list of procedures using Wordpress custom menu
  async getProcedureList ({ commit }) {
    // Retrieve menu structure as nested array
    const data = await api.get('wp-json/wp/v2/menu')
    // Save to state
    commit('setProcedureList', data)
  },

  // Retrieve list of categories
  async getCategoryList ({ commit }) {
    // Retrieve menu structure as nested array
    const data = await api.get('wp-json/wp/v2/categories')
    // Save to state
    commit('setCategoryList', data)
  }
}
