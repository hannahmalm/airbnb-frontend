export default (state = [], action)  => {
    switch (action.type){
        default: 
        return state
    }
}
//state must be default -> an empty version of whatever the reducer is responsible for returning 
//if this is my users reducer, it will return an array of users with objects in it
//this default [] will be used when you inititate (@@INIT)
//action will be an object