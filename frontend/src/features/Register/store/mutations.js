const OPEN_POPUP_USER_REGISTER = (state) => {
    state.popupUserRegister = !(state.popupUserRegister)
}

const REGISTER_USER = (state, result) => {
    state.lastUserRegister = result
}

export default {
    OPEN_POPUP_USER_REGISTER,
    REGISTER_USER    
}