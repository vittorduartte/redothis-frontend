import client from '@/api'

const get_all_universities = async () => {
    try {
        const dados = (await client.get('/'))
    } catch (err) {
        console.error('Erro na action get_all_universities: ', err);
    }
}

export default {
    
}