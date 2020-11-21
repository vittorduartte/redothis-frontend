import client from '@/api'

const setUserAuth = async ({ commit }, payload) => {
    try {

        const token = Buffer.from(`${payload.email}:${payload.password}`, 'utf-8').toString('base64');

        const user = (await client.post('/auth',
            payload,
            {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            }
        )).data
        commit("SET_USER_AUTH", user);
    } catch (err) {
        console.error('Erro na action setUserAuth: ', err);
    }
}

export default {
    setUserAuth
}