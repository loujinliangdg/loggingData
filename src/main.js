import Vue from 'vue'
import VueRouter from 'vue-router'
import './style/weui.min.css'
import App from './App'
// import Vonic from 'vonic'
import axios from 'axios'
// Page Components
import Index from './pages/index/Index.vue'
import Login from './pages/login/Index.vue'
import AddUser from './pages/add_user/Index.vue'
import UserDetail from './pages/user_detail/Index.vue'

// console.log(process.env)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.use(VueRouter)
let router = new VueRouter({
   routes:[
      { path: '/', component: Index },
      { path: '/login', component: Login },
      { path: '/adduser', component: AddUser },
      { path: '/userDetail', component: UserDetail },
   ]
})
new Vue({
  el: '#app',
  router,
  render:h=> h(App)
})

// // Routes
// const routes = [
//   { path: '/', component: Index },
//   { path: '/login', component: Login },
//   { path: '/adduser', component: AddUser },
//   { path: '/userDetail', component: UserDetail },
// ]

// Vue.use(Vonic.app, {
//   routes: routes
// })





