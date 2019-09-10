/**
 * Tab
 */
export default class Tab {
  constructor (data) {
    this.name = data.name
    this.content = null
    this.url = data.url
  }

  loadContent (data) {
    this.content = data
    this.url = data.url
  }
}
