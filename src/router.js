import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import Intelligent from './views/Intelligent.vue'
import Service from './views/Service.vue'



Vue.use(Router)

export default new Router({
  routes: [ 
   {path:'/',redirect:'/index'},
   {path:'/service',component:Service},
   {path:'/intelligent',component:Intelligent},
   {path:'/index',component:Index},
   {path:'/home',component:Home}
  ]
})
