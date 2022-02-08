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


const allReducers = combineReducers({
  user: usersReducer //this is what will show up in my store as the key value
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create the store - the store always takes a reducer(in this case allReducers)
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)))

//action returns a function 



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
