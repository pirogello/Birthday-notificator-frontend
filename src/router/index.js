import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import ChangeNotification from '../views/ChangeNotification.vue'
import LoginForm from '@/components/LoginForm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      { path: 'notification/change/:id', component: ChangeNotification }
    ]
  },
  {
    path: '/login',
    component: LoginForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
