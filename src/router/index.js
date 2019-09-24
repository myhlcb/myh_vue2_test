import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import MyhVue from '@/components/MyhVue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/test',
      name: 'test',
      component: { template: `<p>test</p>` }
    },
    {
      path: '/myh_vue',
      name: 'myh_vue',
      component: MyhVue
    },
  ]
})
