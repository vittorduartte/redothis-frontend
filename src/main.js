import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import MaterialIcons from 'material-icons'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'

import store from './store'
import router from './router'

import '@/assets/styles/main.css'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'
import '@/assets/styles/components_modifier.css'

Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#5b3cc4',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
})

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(MaterialIcons)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
