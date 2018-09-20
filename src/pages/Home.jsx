import React, { Component } from 'react';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
      return (
        <div>
          <Header />
          <h1>its home page</h1>
          <Link to="/checkin">Checkin</Link>&nbsp;&nbsp;
          <Link to="/login">Login</Link>
          <Footer />
        </div>
      );
    }
}
  
export default Home;