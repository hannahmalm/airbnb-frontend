const initialLoginState = {
    username: "",
    password: ""
}


export default (state = initialLoginState, action)  => {
    switch (action.type){
        case "GET_CURRENT_USER":
            return action.user
        default:
        return state
    }
}