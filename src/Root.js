import React, { Component } from 'react';
//import PropTypes from 'prop-types'
//import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkin from './pages/Checkin'
import Login from './pages/Login'

class Root extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/checkin' component={Checkin}/>
                <Route path='/login' component={Login}/>            
            </Switch>
        </Router>
    );
  }
}

export default Root;