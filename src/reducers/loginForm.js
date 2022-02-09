const initialCredentials = {
    username: "",
    password:""
}
export default (state = initialCredentials, action)  => {
    switch (action.type){
        case "UPDATE_LOGIN_FORM":
            return action.loginFormData
        default:
        return state
    }
}

//import this