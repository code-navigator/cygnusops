export default {
  // Set active tab
  setActiveTab (state, index) {
    state.activeTab = state.mainTabs[index]
  },

  // Save procedure object
  setProcedure (state, data) {
    state.procedure = data
  },

  // Save procedure list as an array
  setProcedureList (state, data) {
    state.procedureList = data
  },

  // Add tab to main array
  openMainTab (state, data) {
    state.mainTabs.push(data)
  },

  // Remove tab from main array
  closeMainTab (state, data) {
    state.mainTabs.splice(data, 1)
  },

  setIsLoading (state, data) {
    state.isLoading = data
  },

  setCategoryList (state, data) {
    state.categoryList = data
  },

  setSearchResults (state, data) {
    state.searchResults = data
  }
}
