export default {
  // Save procedure object
  setProcedure (state, data) {
    state.procedure = data
  },

  // Save procedure list as an array
  setProcedureList (state, data) {
    state.procedureList = data
  },

  // Flag to indicate when system is busy
  setIsLoading (state, data) {
    state.isLoading = data
  },

  // List of categories
  setCategoryList (state, data) {
    state.categoryList = data
  },

  // Results from last search operation
  setSearchResults (state, data) {
    state.searchResults = data
  }
}
