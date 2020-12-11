import client from "@/api"

const get_Projetos = async ({ commit }, id_usuario) => {
    try {
        const result = (await client.get(`/user/${id_usuario}/projects`)).data
        commit('GET_PROJETOS', result)
    } catch (error) {
        console.error("Erro na action get_Projetos: ", error)
    }
}

const openPopupSubmissoes = ({ commit }) => {
    commit('OPEN_POPUP_SUBMISSOES')
}

const get_Submissoes = async ({ commit }, id_projeto) => {
    try {
        const result = (await client.get(`/project/${id_projeto}/submissions`)).data
        commit('GET_SUBMISSOES', result)
    } catch (error) {
        console.error("Erro na action get_Submissoes: ", error)
    }
}

const registrar_Submissao = async ({ commit }, payload) => {
    try {
        const result = (await client.post('/submission', payload)).data
        commit("REGISTRAR_SUBMISSAO", result)
    } catch (error) {
        console.error("Erro na action registrar_Submissão: ", error)
    }
}

const popupRegistrarSubmissoes = async ({commit}) => {
    commit('POPUP_REGISTRAR_SUBMISSOES')
}

const selecionar_Projeto = ({ commit }, projeto) => {
    commit('SELECIONAR_PROJETO', projeto)
}

export default {
    get_Projetos,
    get_Submissoes,
    openPopupSubmissoes,
    selecionar_Projeto,
    registrar_Submissao,
    popupRegistrarSubmissoes
}