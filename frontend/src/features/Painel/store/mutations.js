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

const REGISTRAR_SUBMISSAO = (state, result) => {
    state.lastSubmissionRegister = result
}

const POPUP_REGISTRAR_SUBMISSOES = (state) => {
    state.popupRegistrarSubmissoes = !state.popupRegistrarSubmissoes
}

export default {
    GET_PROJETOS,
    GET_SUBMISSOES,
    OPEN_POPUP_SUBMISSOES,
    SELECIONAR_PROJETO,
    REGISTRAR_SUBMISSAO,
    POPUP_REGISTRAR_SUBMISSOES
}