/**
 * Procedure
 */
export default class Procedure {
  constructor ({
    title = '',
    revision = '',
    author = '',
    approval = '',
    scope = '',
    restrictions = '',
    references = '',
    content = ''
  } = {}) {
    this.title = title
    this.revision = revision
    this.author = author
    this.approval = approval
    this.scope = scope
    this.restrictions = restrictions
    this.references = references
    this.content = content
  }
}
