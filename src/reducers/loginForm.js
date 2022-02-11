const initialState = {
    username: "",
    password: ""
}

//defined the intial state of the login form 
export default (state = initialState, action)  => {
    switch (action.type){
        case "UPDATE_LOGIN_FORM":
            return action.formData
        default:
        return state
    }
}

//add reducer to store 