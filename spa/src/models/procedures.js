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

  replaceAll (searchString, searchFor, replaceWith) {
    return searchString.replace(new RegExp(searchFor, 'gi'), replaceWith)
  }

  wrapSection (markup, className) {
    // Wrap content in class identifying section
    // Add sacrificial outer ol>li wrapper to start numbering at x.1
    // instead of x.0
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
    return this.wrapSection(this.scope, 'scope')
  }

  getRestrictions () {
    return this.wrapSection(this.restrictions, 'restrictions')
  }

  getReferences () {
    return this.wrapSection(this.references, 'references')
  }

  getContent () {
    var text = this.replaceAll(this.content, '<a', '<router-link')
    text = this.replaceAll(text, '</a>', '</router-link')
    text = this.replaceAll(text, 'href', 'to')
    text = this.replaceAll(text, 'http://dev.local', '')

    return this.wrapSection(text, 'procedure')
  }
}
