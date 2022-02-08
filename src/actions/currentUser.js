export const setCurrentUser = user => {
    return {
    //return an action -> key of type with a payload
    //an action is an object
    type: "SET_CURRENT_USER", //THIS IS THE SAME TYPE AS THE ONE IN THE REDUCER
    payload: user
    }
}