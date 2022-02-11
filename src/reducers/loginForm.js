const initialLoginState = {
    username: "",
    password: ""
}

//defined the intial state of the login form 
export default (state = initialLoginState, action)  => {
    switch (action.type){
        case "UPDATE_LOGIN_FORM":
            return action.loginFormData
        default:
        return state
    }
}

//add reducer to store 