import client from "@/api"

const get_Projetos = async ({
    commit
}, id_usuario) => {
    try {
        const result = (await client.get(`/user/${id_usuario}/projects`)).data
        commit('GET_PROJETOS', result)
    } catch (error) {
        console.error("Erro na action get_Projetos: ", error)
    }
}

const openPopupSubmissoes = ({
    commit
}) => {
    commit('OPEN_POPUP_SUBMISSOES')
}

const get_Submissoes = async ({
    commit
}, id_projeto) => {
    try {
        const result = (await client.get(`/project/${id_projeto}/submissions`)).data
        commit('GET_SUBMISSOES', result)
    } catch (error) {
        console.error("Erro na action get_Submissoes: ", error)
    }
}

const registrar_Submissao = async ({
    commit
}, payload) => {
    try {
        const result = (await client.post('/submission', payload)).data
        commit("REGISTRAR_SUBMISSAO", result)
    } catch (error) {
        console.error("Erro na action registrar_Submissão: ", error)
    }
}

const actionPopupRegistrarSubmissoes = ({
    commit
}) => {
    commit('POPUP_REGISTRAR_SUBMISSOES')
}

const selecionar_Projeto = ({
    commit
}, projeto) => {
    commit('SELECIONAR_PROJETO', projeto)
}

const actionPopupRegistrarRevisao = ({
    commit
}) => {
    commit('POPUP_REGISTRAR_REVISAO')
}

const registrar_Revisao = async ({
    commit
}, payload) => {
    try {
        const result = (await client.post('/revision', payload)).data
        commit('REGISTRAR_REVISAO', result)
    } catch (error) {
        console.error("Erro na action registrar_Revisao: ", error)
    }
}

const submissao_Selecionada = ({commit}, submissao) => {
    commit("SUBMISSAO_SELECIONADA", submissao)
} 

const get_Revisoes = async ({
    commit
}, id_submissao) => {
    try {
        const result = (await client.get(`/submission/${id_submissao}/revisions`)).data
        commit('GET_REVISOES', result)
    } catch (error) {
        console.error("Erro na action get_Revisoes: ", error)
    }
}

export default {
    get_Projetos,
    get_Submissoes,
    openPopupSubmissoes,
    selecionar_Projeto,
    registrar_Submissao,
    actionPopupRegistrarSubmissoes,
    actionPopupRegistrarRevisao,
    registrar_Revisao,
    get_Revisoes,
    submissao_Selecionada
}