//import any forms that use a currentUser


//synchronous action creator
//all actions need a type and a payload
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
//Dispatch vanilla actions asynchronously
//Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.
//"thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", 
        { method: "POST", //POST because sending credentials
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials) //needed for all POST requests
        }) 
    }
//store.dispatch(login)  //--> Thunk is dispatched by calling the action creater
}
