/**
 * Procedure
 */
export default class Procedure {
  constructor (data) {
    this.title = data.title.rendered
    this.number = data.acf.number
    this.revision = data.acf.revision
    this.date = this.convertDate(data.modified)
    this.author = data.acf.author
    this.approval = data.acf.approval
    this.scope = data.acf.scope
    this.restrictions = data.acf.restrictions
    this.references = data.acf.references
    this.content = data.content.rendered
  }

  convertDate (d) {
    const date = new Date(d)
    const day = date.getDate()
    const month = date.getMonth() + 1 // Months are zero based
    const year = date.getFullYear()

    return month + '/' + day + '/' + year
  }

  formatSection (text, sectionName) {
    text = this.replaceLinks(text)
    text = this.wrapSection(text, sectionName)
    return text
  }

  // Replace anchor tags with router-link components to stop page from reloading
  // Original tag: <a href="http://dev.local/procedures/<section type>"></a>
  // New tag: <router-link to="/procedures/<section type"></router-link>
  replaceLinks (text) {
    text = this.replaceAll(text, '<a href', '<router-link to')
    text = this.replaceAll(text, 'http://dev.local', '')
    text = this.replaceAll(text, '<a xlink:href', '<router-link to')
    text = this.replaceAll(text, '</a>', '</router-link>')
    return text
  }

  // General method to replace string that matches regex
  replaceAll (searchString, searchFor, replaceWith) {
    if (searchString) {
      return searchString.replace(new RegExp(searchFor, 'g'), replaceWith)
    }
  }

  // Wrap content in class identifying section
  // Add sacrificial outer ol>li wrapper to start numbering at x.1
  // instead of x.
  wrapSection (markup, className) {
    return `
      <section class="${className}">
        <ol>
          <li>
            ${markup}
          </li>
        </ol>
      </section>`
  }

  getScope () {
    return this.formatSection(this.scope, 'scope')
  }

  getRestrictions () {
    return this.formatSection(this.restrictions, 'restrictions')
  }

  getReferences () {
    return this.formatSection(this.references, 'references')
  }

  getContent () {
    return this.formatSection(this.content, 'procedure')
  }
}
