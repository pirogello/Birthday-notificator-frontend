import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import VueAxios from 'vue-axios'
import vueMeta from 'vue-meta'
import './assets/style.css'

Vue.use(vueMeta)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
