import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import ChangeNotification from '../views/ChangeNotification.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      { path: 'notification/change/:id', component: ChangeNotification }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
