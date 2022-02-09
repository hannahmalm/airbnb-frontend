//action creator datatype is a function
//takes in the loginFormData and returns 
export const updateLoginForm = loginFormData => {
    console.log('updateLoginForm');
    return {
    //return an action -> key of type with a payload
    //an action is an object
    type: "UPDATE_LOGIN_FORM", //THIS IS THE SAME TYPE AS THE ONE IN THE REDUCER
    payload: loginFormData
    }
}