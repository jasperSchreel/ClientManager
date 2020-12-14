import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PatientList from '@/components/PatientList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/patient/list',
      name: 'PatientList',
      component: PatientList
    },
    {
      path: '/list',
      name: 'PatientList',
      component: PatientList
    }
  ]
})
