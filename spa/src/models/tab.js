/**
 * Tab
 */
export default class Tab {
  constructor (data) {
    this.name = data
    this.content = null
  }

  loadContent (data) {
    this.content = data
  }
}
