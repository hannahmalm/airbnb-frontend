//synchronous action creator
export const setCurrentUser = user => {
    return {
    //return an action -> key of type with a payload
    //an action is an object
    type: "SET_CURRENT_USER", //THIS IS THE SAME TYPE AS THE ONE IN THE REDUCER
    payload: user
    }
}

//In order to become a current user, you must log in 
//asynchronous request - need to send a request to backend 
//return a function --> Thunk gives us this capability
//auth controller --> Ensure this is set up on the backend 
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
        method: "POST", //POST because sending
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials) //needed for all POST requests
    }) 
}
}