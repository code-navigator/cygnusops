export default {
  // Set active tab
  setActiveTab (state, index) {
    state.activeTab = state.mainTabs[index]
  },

  // Add tab to main array
  openMainTab (state, data) {
    state.mainTabs.push(data)
  },

  // Remove tab from main array
  closeMainTab (state, data) {
    state.mainTabs.splice(data, 1)
  }
}
