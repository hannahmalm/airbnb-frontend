//Welcome page that is first loaded with a link to the login or register form
//should be simple with just a picture
//STATELESS - Will have LINKS

//This is what will render in App JS

import React from 'react';
// import LoginForm from './components/LoginForm.js';
// import Register from './components/Register.js';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

//render Welcome page with Header (Header has links to sign up or sign in)
class Welcome extends React.Component {
  render(){
    return (
    <div id="welcome-container" >
    
      <div>
        <h3 className="float-md-start mb-0"></h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link active-welcome" aria-current="page" href="#">Login</a>
          <a className="nav-link active-welcome" aria-current="page" href="#">Register</a>
        </nav>
      </div>
  
    <main className="px-3">
      <h1>Welcome to Air BNB</h1>
      <p className="lead">Your Adventure Awaits</p>
      <div> Add Image Here</div>
    </main>
  </div>
      );
      }
    }
    
    export default Welcome;