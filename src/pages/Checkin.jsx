import React, { Component } from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import CheckinEvents from '../check-in/CheckinEvents';
import Menu from '../templates/Menu';
import '../templates/Common.css';

class Checkin extends Component {
    render() {
      return (
        <div>
          <Header />         
          <div className="mainflexcontainer" >          
          <Menu/>          
          <CheckinEvents />
          </div>
          <Footer />
        </div>
      );
    }
}
  
export default Checkin;