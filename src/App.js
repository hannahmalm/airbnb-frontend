import React, { Component } from 'react';
// import { login } from './actions/currentUser';
import './App.css';



//IMPORT COMPONENTS TO RENDER
import Welcome from './components/Welcome';
import LoginForm from './components/LoginForm';


//render Welcome page with Header (Header has links to sign up or sign in)
class App extends React.Component {
  render(){
    return (
     <div>
       {/* <Login/> */}
      <Welcome></Welcome>
      <LoginForm></LoginForm>
      </div>
    );
    }
  }
  
 

export default App;
