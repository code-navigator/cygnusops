import ProcedureClass from '@Models/procedures'
import api from '@Api/api'

export default {
  // Retrieve data for current procedure
  async getProcedure ({ commit }, slug = 'search-page') {
    const data = await api.get('wp-json/wp/v2/pages?slug=' + slug)
    // Save data to state
    commit(
      'setProcedure',
      new ProcedureClass(data[0])
    )
  },

  // Retrieve list of procedures using Wordpress custom menu
  async getProcedureList ({ commit }) {
    // Retrieve menu structure as nested array
    const data = await api.get('wp-json/wp/v2/menu')
    // Save to state
    commit('setProcedureList', data)
  }
}
