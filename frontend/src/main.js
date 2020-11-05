import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import MaterialIcons from 'material-icons'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import store from './store'
import router from './router'

import 'vuesax/dist/vuesax.css'
import '@/assets/styles/main.css'

Vue.use(Vuex)
Vue.use(Vuesax)
Vue.use(VueRouter)
Vue.use(MaterialIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
