import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import Register from '@/features/Register/store'
import Login from '@/features/Login/store'
import Painel from '@/features/Painel/store'
import Projeto from '@/features/Projeto/store'

const modules = {
    Register,
    Login,
    Painel,
    Projeto
}

export default new Vuex.Store( {
    modules,
    state,
    actions,
    mutations,
    getters
})