import React, { Component } from 'react';
import { login } from './actions/currentUser';
import './App.css';
//IMPORT COMPONENTS TO RENDER
import LoginForm from './components/LoginForm.js'


class App extends React.Component {
  render(){
    return (
     <div>
       <LoginForm></LoginForm>
      </div>
    );
    }
  }
  
 

export default App;
