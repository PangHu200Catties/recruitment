import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import foot from '@/components/foot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/homepage',
      name:'homepage',
      component:homepage,
      meta:{a:true}
    },
    {
      path:'/foot',
      name:'foot',
      component:foot
    }
  ]
})
