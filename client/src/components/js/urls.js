import UrlService from '@/services/UrlService'
export default {
  name: 'urls',
  data () {
    return {
      urls: [],
      inputUrl: ''
    }
  },
  created: function() {
    this.getUrls()
  },
  methods: {
    async clearAll () {
      await UrlService.clearAll() 
      this.$router.push({ name: 'NewUrl' })
    },
    async getUrls () {
      const response = await UrlService.fetchUrls()
      this.urls = response.data.urls
    }
  }
}