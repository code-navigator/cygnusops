import ProcedureClass from '@Models/procedures'
import SearchResultsClass from '@Models/searchResults'
import Tab from '@Models/tab'
import api from '@Api/api'
import router from '@Router/router'

export default {
  // Retrieve data for current procedure
  async getProcedure ({ state, commit }) {
    var slug = router.currentRoute.params.slug

    // If there is no slug ...
    if (!slug || slug === 'undefined') {
      // But there is stored procedure, navigate to that procedure
      if (typeof state.procedure.slug !== 'undefined') {
        router.push('/procedures/' + state.procedure.slug)
        slug = state.procedure.slug
        // Otherwise, go to a default page
      } else {
        router.push('/procedures/' + 'procedure-101')
        slug = 'procedure-101'
      }
    }

    // Set flag to prevent page from displaying until data is loaded
    commit(
      'setIsLoading',
      true
    )

    // Retrieve procedure
    const data = await api.get('wp-json/wp/v2/procedures?slug=' + slug)
    // Save data to state
    await commit(
      'setProcedure',
      new ProcedureClass(data[0])
    )

    // Clear flag to display loaded procedure
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
  },
  // Retrieve list of procedures using Wordpress custom menu
  async loadFile () {
    var data = await api.get('wp-json/wp/v2/files')
  },

  // Add main tab
  openMainTab ({ state, commit }, data) {
    // Add a new tab
    commit(
      'openMainTab',
      new Tab(data)
    )
    // Update active tab
    commit(
      'setActiveTab',
      state.mainTabs.length - 1
    )
  },

  // Remove main tab
  closeMainTab ({ commit, state }, index) {
    // Remove tab from stack
    commit('closeMainTab', index)
    // Display contents of previous tab
    index = index >= 1 ? index - 1 : 0
    router.push(state.mainTabs[index].url)
    // Update active tab
    commit(
      'setActiveTab',
      state.mainTabs[index]
    )
  }
}
