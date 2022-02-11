//action creator datatype is a function
//takes in the loginFormData and returns 
 //return an action -> key of type with a payload
    //an action is an object
export const updateLoginForm = formData => {
    console.log('updateLoginForm');
    return {
        type: "UPDATE_LOGIN_FORM", //THIS IS THE SAME TYPE AS THE ONE IN THE REDUCER
        formData
    }
}