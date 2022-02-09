//reducer (previousState, action) => newState
//reducers are always pure and predictable
//First time a reducer is called, the state value will be undefined. 
//The reducer needs to handle this case by supplying a default state value before handling the incoming action
//The action type should be the same for the currentUser action 
// export default (state = null, action)  => {
//     switch (action.type){
//         case "SET_CURRENT_USER":
//             return action.user
//         default:
//         return state
//     }
// }