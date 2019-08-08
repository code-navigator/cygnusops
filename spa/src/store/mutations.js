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
  addMainTab (state, data) {
    state.mainTabs.push(data)
  }
}
