const OPEN_POPUP_REGISTRAR_TRABALHO = (state) => {
    state.popupRegistrarTrabalho = !(state.popupRegistrarTrabalho);
}

const GET_CATEGORIES = (state, result) => {
    state.categorias = result
}

const GET_AREAS_DE_CONHECIMENTO = (state, result) => {
    state.areasDeConhecimento = result
}

const GET_ALUNOS = (state, result) => {
    state.alunos = result
}

const REGISTRAR_PROJETO = (state, result) => {
    state.lastProjetoRegistrado = result
}

export default {
    OPEN_POPUP_REGISTRAR_TRABALHO,
    GET_CATEGORIES,
    GET_AREAS_DE_CONHECIMENTO,
    GET_ALUNOS,
    REGISTRAR_PROJETO
}