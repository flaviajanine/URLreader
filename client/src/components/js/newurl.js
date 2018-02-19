import UrlService from '@/services/UrlService'
export default {
  name: 'newurls',
  data () {
    return {
      urls: [],
      inputUrl: ''
    }
  },
  methods: {    
    async sendUrl () {
      var response = await UrlService.sendUrl({
        url: this.inputUrl
      })
      if (response.data.success){
        this.$router.push({ name: 'Urls' });
      }
    }
  }
}
