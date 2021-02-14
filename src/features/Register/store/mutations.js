const OPEN_POPUP_USER_REGISTER = (state) => {
    state.popupUserRegister = !(state.popupUserRegister)
}

const REGISTER_USER = (state, result) => {
    state.lastUserRegister = result
}

const GET_COURSES = (state, result) => {
    state.courses = result
}

const GET_DEGREES = (state, result) => {
    state.degrees = result
}

export default {
    OPEN_POPUP_USER_REGISTER,
    REGISTER_USER,
    GET_COURSES,
    GET_DEGREES    
}