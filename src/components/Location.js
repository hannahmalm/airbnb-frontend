import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
//import LocationCard from './components/LocationCard.js'

class Location extends React.Component {
    render(){
      return (
    <div>
       <Header></Header>
       {/* <LocationCard></LocationCard> */}
       <Footer></Footer>
    </div>
     );
  }}

  //On Click of 'View Listings in Location Card', route to Listings
  export default Location;