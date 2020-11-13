import client from '@/api'

const openPopupUserRegister = ({ commit }) => {
    commit('OPEN_POPUP_USER_REGISTER');
}

const registerUser = async ({ commit }, payload) => {
    try {
        const result = (await client.post('/user', payload)).data
        commit('REGISTER_USER', result)
    } catch (err) {
        console.error('Erro na action registerUser :', err)
        commit('REGISTER_USER', { data: { email: false } })
    }
}

export default {
    openPopupUserRegister,
    registerUser
}