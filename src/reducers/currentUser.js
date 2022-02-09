//reducer (previousState, action) => newState
//reducers are always pure and predictable
//First time a reducer is called, the state value will be undefined. 
//The reducer needs to handle this case by supplying a default state value before handling the incoming action
//The action type should be the same for the currentUser action 

//The Case = SET CURRENT USER comes from the currentUser.js ACTION
//When The action is = to the case SET CURRENT USER, return the user, else by default, return null
export default (state = null, action)  => {
    switch (action.type){
        case "GET_CURRENT_USER":
            return action.user
        default:
        return state
    }
}


//BOILERPLATE REDUCER
// export function todos(state = [], action) {
//     switch (action.type) {
//       case ActionTypes.ADD_TODO:
//         const text = action.text.trim()
//         return [...state, text]
//       default:
//         return state
//     }
//   }