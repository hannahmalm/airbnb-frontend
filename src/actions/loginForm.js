import loginForm from "../reducers/loginForm"

export const loginForm = loginFormData => {
    return {
    //return an action -> key of type with a payload
    //an action is an object
    type: "UPDATE_LOGIN_FORM", //THIS IS THE SAME TYPE AS THE ONE IN THE REDUCER
    payload: loginFormData
    }
}