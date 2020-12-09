import client from '@/api'

const openPopupUserRegister = ({
    commit
}) => {
    commit('OPEN_POPUP_USER_REGISTER');
}

const registerUser = async ({
    commit
}, payload) => {
    try {
        const result = (await client.post('/user', payload)).data
        commit('REGISTER_USER', result)
    } catch (err) {
        console.error('Erro na action registerUser: ', err)
        commit('REGISTER_USER', {
            data: {
                email: false
            }
        })
    }
}

const getCourses = async ({ commit }) => {
    try {
        const result = (await client.get('/get_courses')).data
        commit('GET_COURSES', result)
    } catch (err) {
        console.error('Erro na action getCourses: ', err)
    }
}

const getDegrees = async ({ commit }) => {
    try {
        const result = (await client.get('/get_degrees')).data
        commit('GET_DEGREES', result)
    } catch (err) {
        console.error('Erro na action getDegrees: ', err)
    }
}

export default {
    openPopupUserRegister,
    registerUser,
    getCourses,
    getDegrees
}