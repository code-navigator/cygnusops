/**
 * Tab
 */
export default class Tab {
  constructor (data) {
    this.name = data.name
    this.contents = null
    this.url = data.url
  }

  loadContent (data) {
    this.contents = data
    this.url = data.url
  }
}
