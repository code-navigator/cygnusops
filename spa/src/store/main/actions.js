import router from '@Router/router'
import Tab from '@Models/tab'

export default {
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

  // Change tabs; handler for when user clicks tab
  changeMainTab ({ state, commit, rootState }, index ) {
    const content = rootState.procedure.procedure
    commit(
      'procedure/setProcedure',
      state.activeTab.contents
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
