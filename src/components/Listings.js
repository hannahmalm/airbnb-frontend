import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
//import ListingCard from './components/ListingCard.js'

class Listing extends React.Component {
    render(){
      return (
    <div>
       <Header></Header>
       {/* <ListingCard></ListingCard> */}
       <Footer></Footer>
    </div>
     );
  }}


  //On Click of 'Create Reservation', route to Reservation Form
  export default Listing;