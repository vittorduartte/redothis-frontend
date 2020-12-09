import client from "@/api"

const get_AreasDeConhecimento = async ({ commit }) => {
    try {
        const result = (await client.get("/get_knowledge_areas")).data
        commit("GET_AREAS_DE_CONHECIMENTO", result)
        
    } catch (error) {
        console.error("Erro na action get_AreasDeConhecimento: ", error)
    }
}

const get_Categorias = async ({ commit }) => {
    try {
        const result = (await client.get("/get_categories")).data
        commit("GET_CATEGORIES", result)
    } catch (error) {
        console.error("Erro na action get_AreasDeConhecimento: ", error)
    }
}

export default {
    get_AreasDeConhecimento,
    get_Categorias
}