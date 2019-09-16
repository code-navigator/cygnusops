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
  },

  setContents (state, data) {
    state.activeTab.contents = data
    state.activeTab.name = data.slug
    state.activeTab.url = data.url
  },

  // Flag to indicate when system is busy
  setIsLoading (state, data) {
    state.isLoading = data
  }
}
