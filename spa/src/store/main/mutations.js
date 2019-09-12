export default {
  // Set active tab
  setTab (state, index) {
    state.activeTab = state.tabs[index]
  },

  // Add tab to main array
  openTab (state, data) {
    state.tabs.push(data)
  },

  // Remove tab from main array
  closeTab (state, data) {
    state.tabs.splice(data, 1)
  }
}
