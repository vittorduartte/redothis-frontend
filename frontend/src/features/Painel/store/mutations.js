const GET_PROJETOS = (state, result) => {
    state.projetos = result
}

const OPEN_POPUP_SUBMISSOES = (state) => {
    state.popupSubmissoes = !state.popupSubmissoes
}

const GET_SUBMISSOES = (state, result) => {
    state.submissoes = result
}

const SELECIONAR_PROJETO = (state, projeto) => {
    state.projetoSelecionado = projeto
}

export default {
    GET_PROJETOS,
    GET_SUBMISSOES,
    OPEN_POPUP_SUBMISSOES,
    SELECIONAR_PROJETO
}