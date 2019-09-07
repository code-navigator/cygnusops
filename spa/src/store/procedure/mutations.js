import Tab from '../../models/tab'

export default {
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
    if (typeof state.mainTabs !== 'undefined' && data !== null) {
      var found = state.mainTabs.find((tab) => {
        return tab.name === data
      })
    }
    if(!found){
      state.mainTabs.push(data)
    }
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
