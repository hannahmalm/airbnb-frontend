//Nav bar with explore, reservations, and profile
//stateless
import React from 'react';


//render Welcome page with Header (Header has links to sign up or sign in)
class Footer extends React.Component {
  render(){
    return (
     <div className='footer-container'>
         <nav className="navbar fixed-bottom navbar-light bg-light">
         <a className="nav-link active" aria-current="page" href="#">Explore</a>
         <a className="nav-link active" aria-current="page" href="#">Reservations</a>
         <a className="nav-link active" aria-current="page" href="#">Profile</a>
        </nav>
      </div>
    );
    }
  }

  export default Footer;
