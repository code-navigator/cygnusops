import router from '@Router/router'
import Tab from '@Models/tab'

export default {
  // Add main tab
  openTab ({ state, commit }, data) {
    // Add a new tab
    commit(
      'openTab',
      new Tab(data)
    )
    // Update active tab
    commit(
      'setTab',
      state.tabs.length - 1
    )
  },

  // Change tabs; handler for when user clicks tab
  setContents ({ commit }, data) {
    commit(
      'setContents',
      data
    )
  },

  setSpace ({ commit }, data) {
    commit(
      'setSpace',
      data
    )
  },

  // Remove main tab
  closeTab ({ commit, state }, index) {
    // Remove tab from stack
    commit('closeTab', index)
    // Display contents of previous tab
    index = index >= 1 ? index - 1 : 0
    router.push(state.tabs[index].url)
    // Update active tab
    commit(
      'setTab',
      state.tabs[index]
    )
  },

  setIsLoading ({ commit }, data) {
    commit(
      'setIsLoading',
      data
    )
  },

  setTab ({ commit }, data) {
    commit(
      'setTab',
      data
    )
  }

}
