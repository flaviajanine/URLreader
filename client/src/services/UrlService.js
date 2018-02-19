import Api from '@/services/Api'

export default {
  fetchUrls () {
    return Api().get('urls')
  },
  sendUrl (params) {
    return Api().post('urls', params)
  },
  clearAll () {
    return Api().delete('urls')
  }
}
