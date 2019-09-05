import Procedure from './procedures'
/**
 * Procedure
 */
export default class SearchResults {
  constructor (data) {
    this.procedures = []
    this.loadProcedures(data)
  }

  loadProcedures (data) {
    data.forEach((datum) => {
      this.procedures.push(new Procedure(datum))
    })
  }
}
