import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux' //connects global state (store) to the entire app under ReactDOM
//Three libraries to import from: redux, redux-thunk, react-redux
//Redux DevTools for debugging application's state changes.
import usersReducer from './reducers/users.js'
//https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/   --BEST VIDEO FOR REDUX 

//STORE 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //apply the middleware and dev tools
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk))) //create the store - the store always takes a reducer(in this case allReducers)

//COMBINED REDUCERS --> Refactor into its own file and import
//requires usersReducer from import --> Remeber that reducers have thier own file 
const allReducers = combineReducers({
  user: usersReducer //this is what will show up in my store as the key value
})


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
