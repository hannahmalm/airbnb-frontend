import React, { Component } from 'react';
// import { login } from './actions/currentUser';
import './App.css';


//IMPORT COMPONENTS TO RENDER
import Login from './components/LoginForm.js'


class App extends React.Component {
  render(){
    return (
     <div>
       <Login/>
      </div>
    );
    }
  }
  
 

export default App;
