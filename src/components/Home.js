//renders header & Footer
//renders card page After Log in
//stateless

import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
// import { Location } from 'react-router-dom';

//render Welcome page with Header (Header has links to sign up or sign in)
class Home extends React.Component {
    render(){
      return (
    <div>
       <Header></Header>
       {/* <Location></Location> */}
       <Footer></Footer>
    </div>
     );
  }}

  export default Home;