import Vue from 'vue'
import Router from 'vue-router'
import Commodity from '@/components/commodity'
import Comment from '@/components/comment'
import Seller from '@/components/seller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Commodity
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: Commodity
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
    {
    	path:'/seller',
    	name:'seller',
    	component:Seller
    }

  ]
})
