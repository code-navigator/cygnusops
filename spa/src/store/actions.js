import ProcedureClass from '@Models/procedures'
import api from '@Api/api'

export default {
  // Retrieve data for current procedure
  async getProcedure ({ commit }) {
    const data = await api.get('wp-json/wp/v2/pages/152')

    commit(
      'setProcedure',
      new ProcedureClass({
        title: data.title.rendered,
        content: data.content.rendered,
        revision: data.acf.revision,
        author: data.acf.author,
        approval: data.acf.approval,
        restrictions: data.acf.restrictions,
        scope: data.acf.scope,
        references: data.acf.references
      })
    )
  }
}
