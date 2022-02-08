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
//Look at the actions identified

// const counter =(state = 0, action) => {
//     switch(action.type){
//         case 'Increment':
//             return state + 1;
//         case 'Decrement':
//             return state - 1;
//     }
// }

// let store = createStore(counter)    --> Must add in the reducer to the store