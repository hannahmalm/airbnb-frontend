//Nav bar with explore, reservations, and profile
//stateless
import React from 'react';


//render Welcome page with Header (Header has links to sign up or sign in)
class Footer extends React.Component {
  render(){
    return (
     <div className='container'>
         <nav className="navbar fixed-bottom navbar-light bg-light">
            <a className="navbar-brand" href="#">Fixed bottom</a>
        </nav>
       
      </div>
    );
    }
  }

  export default Footer;
