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

const POPUP_REGISTRAR_REVISAO = (state) => {
    state.popupRevisao = !state.popupRevisao
}

const REGISTRAR_REVISAO = (state, result) => {
    state.lastRevisionRegister = result
}

const GET_REVISOES = (state, result) => {
    state.revisoes_por_submissao = result
}

const SUBMISSAO_SELECIONADA = (state, submissao) => {
    state.submissaoSelecionada = submissao
}

export default {
    GET_PROJETOS,
    GET_SUBMISSOES,
    OPEN_POPUP_SUBMISSOES,
    SELECIONAR_PROJETO,
    REGISTRAR_SUBMISSAO,
    POPUP_REGISTRAR_SUBMISSOES,
    POPUP_REGISTRAR_REVISAO,
    REGISTRAR_REVISAO,
    GET_REVISOES,
    SUBMISSAO_SELECIONADA
}