import React, { Component } from 'react';
// import { login } from './actions/currentUser';
import './App.css';



//IMPORT COMPONENTS TO RENDER
import Welcome from './components/Welcome';
import Login from './components/Login';


//render Welcome page with Header (Header has links to sign up or sign in)
class App extends React.Component {
  render(){
    return (
     <div>
       {/* <Login/> */}
      <Welcome></Welcome>
      <Login></Login>
      </div>
    );
    }
  }
  
 

export default App;
