//header with Signup / Signin / Logout links
//If a user is already Signed in
//stateless
import React from 'react';


//render Welcome page with Header (Header has links to sign up or sign in)
class Header extends React.Component {
  render(){
    return (
     <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link active" aria-current="page" href="#">Logout</a>
        </div>
        </div>
    </div>
    </nav>
  
       
      </div>
    );
    }
  }
  
 

export default Header;

