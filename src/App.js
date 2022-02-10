import React, { Component } from 'react';
// import { login } from './actions/currentUser';
import './App.css';


//IMPORT COMPONENTS TO RENDER
import Login from './components/LoginForm.js'


//render Welcome page with Header (Header has links to sign up or sign in)
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
