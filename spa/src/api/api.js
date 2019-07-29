import axios from 'axios'
import UrlClass from '@Api/url'

export default {
  // GET - request data
  async get (url, request) {
    const path = new UrlClass(url, request)
    try {
      const response = await axios.get(path.pathWithQuery)
      return response.data
    } catch (error) {
      console.log('error', error)
    }
  }
}
