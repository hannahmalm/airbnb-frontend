import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//--------STORE IMPORTS--------------------------------------------------
  //Three libraries to import from: redux, redux-thunk, react-redux
  //Redux DevTools for debugging application's state changes.
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk' //The redux-thunk middleware, which allows simple asynchronous use of dispatch.
//Thunk is a A middleware which logs dispatched actions and the resulting new state.
import { Provider } from 'react-redux' //connects global state (store) to the entire app under ReactDOM


//---------REDUCERS IMPORTED------------------------------------------------------
import currentUserReducer from './reducers/currentUser.js'



//https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/   --BEST VIDEO FOR REDUX 


//COMBINED REDUCERS --> Refactor into its own file and import
//requires usersReducer from import --> Remeber that reducers have thier own file 
//To pass reducers into CombineReducers the following must be met
  //For any action that is not recognized, it must return the state given to it as the first argument.
  //It must never return undefined. It is too easy to do this by mistake via an early return statement, so combineReducers throws if you do that instead of letting the error manifest itself somewhere else.
  //If the state given to it is undefined, it must return the initial state for this specific reducer. 

  //https://redux.js.org/api/combinereducers - BEST ARTICLE FOR COMBINED REDUCER
const allReducers = combineReducers({
  currentUser: currentUserReducer, //this is what will show up in my store as the key value
})

//---------CREATING THE STORE ---------------------------------------------------
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //apply the middleware and dev tools
//creating a store takes 3 args - reduce function, preLoadedState, compose function(applyMiddleware with Thunk)
//allReducers = A reducing function that returns the next state tree, given the current state tree and an action to handle.
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk))) //create the store - the store always takes a reducer(in this case allReducers)



//Standard boilerplate code - Wrap provider in the store
ReactDOM.render(
  <Provider store={store}><App />
  </Provider>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
