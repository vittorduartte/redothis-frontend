import client from "@/api"

const openPopupRegistrarTrabalho = ({
    commit
}) => {
    commit('OPEN_POPUP_REGISTRAR_TRABALHO');
}

const get_AreasDeConhecimento = async ({
    commit
}) => {
    try {
        const result = (await client.get("/get_areas")).data
        commit("GET_AREAS_DE_CONHECIMENTO", result)

    } catch (error) {
        console.error("Erro na action get_AreasDeConhecimento: ", error)
    }
}

const get_Categorias = async ({
    commit
}) => {
    try {
        const result = (await client.get("/get_categories")).data
        commit("GET_CATEGORIES", result)
    } catch (error) {
        console.error("Erro na action get_AreasDeConhecimento: ", error)
    }
}

const get_Alunos = async ({
    commit
}, id_curso) => {
    try {
        const result = (await client.get(`/users?course=${id_curso}&type=student`)).data
        commit("GET_ALUNOS", result)
    } catch (error) {
        console.error("Erro na action get_Alunos: ", error)
    }
}

const get_Orientadores = async ({
    commit
}, id_curso) => {
    try {
        const result = (await client.get(`/users?course=${id_curso}&type=tutor`)).data
        commit("GET_ORIENTADORES", result)
    } catch (error) {
        console.error("Erro na action get_Orientadores: ", error)
    }
}

const registrar_Projeto = async ({
    commit
}, payload) => {
    try {
        const result = (await client.post("/project", payload))
        commit("REGISTRAR_PROJETO", result)
    } catch (error) {
        console.error("Erro na action registrar_Projeto: ", error)
    }
}

export default {
    get_AreasDeConhecimento,
    get_Categorias,
    openPopupRegistrarTrabalho,
    get_Alunos,
    registrar_Projeto,
    get_Orientadores
}