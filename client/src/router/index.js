import Vue from 'vue'
import Router from 'vue-router'
import Urls from '@/components/Urls'
import NewUrl from '../components/NewUrl'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/urls',
      name: 'Urls',
      component: Urls
    },
    {
      path: '/newurl',
      name: 'NewUrl',
      component: NewUrl
    }
  ]
})
