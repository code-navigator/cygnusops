import ProcedureClass from '@Models/procedures'
import SearchResultsClass from '@Models/searchResults'
import api from '@Api/api'

// Constant for default procedure
const DEFAULT_SLUG = 'procedure-101'

export default {
  // Retrieve data for current procedure
  async getContents ({ state, commit, dispatch }, slug = DEFAULT_SLUG) {
    // Set flag to prevent page from displaying until data is loaded
    dispatch(
      'main/setIsLoading',
      true,
      { root: true }
    )
    // Retrieve procedure
    const data = await api.get('wp-json/wp/v2/procedures?slug=' + slug)

    // Set path
    data[0].url = '/procedures/' + slug

    // Load contents to main tab
    await commit(
      'main/setContents',
      new ProcedureClass(data[0]),
      { root: true }
    )

    // // Save data to state
    // await commit(
    //   'setProcedure',
    //   new ProcedureClass(data[0])
    // )

    // Clear flag to display loaded procedure
    await commit(
      'main/setIsLoading',
      false,
      { root: true }
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
  },

  // Retrieve an array of procedures matching a specific category
  async searchByCategory ({ commit }, slug) {
    // Look up category id by slug
    var data = await api.get('wp-json/wp/v2/categories?slug=' + slug)
    // Retrieve matching posts by category id
    data = await api.get('wp-json/wp/v2/procedures?categories=' + data[0].id)
    commit(
      'setSearchResults',
      new SearchResultsClass(data)
    )
  },

  // Retrieve an array of procedures with specific matching term(s)
  async searchByTerm ({ commit }, term) {
    if (term) {
      var data = await api.get('wp-json/wp/v2/procedures?search=' + term)
      commit(
        'setSearchResults',
        new SearchResultsClass(data)
      )
    } else {
      commit(
        'setSearchResults',
        ''
      )
    }
  }
}
