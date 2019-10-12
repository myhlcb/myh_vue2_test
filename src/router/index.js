import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import Birthday from '@/components/birthday/Birthday'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/birthday',
      name: 'Birthday',
      component: Birthday
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
