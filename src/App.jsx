import React, { Component } from 'react';
import * as adminRoutes from './components/admin';
import {Home} from './components/views/home/Home';

import './App.css';
import { server } from './services/data.service.js';
import { auth } from './services/data.service.js';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

//*********** initialize the db. should be used only in App.js ******
server.init()

export class App extends Component {
  state = {
    loggedIn: false,
    loggedInData: null
  }

  constructor(props) {
    super(props)
    // check if the user is logged in
    const authData = auth.loggedInData();
    if (authData) {
      this.state = { loggedIn: true, loggedInData: authData };

    }
  }


  setAuth = val => {
    if (val) {
      this.setState({ loggedIn: true, loggedInData: auth.loggedInData() })
      window.location.href = "/admin/directories";
    } else {
      this.setState({ loggedIn: false, loggedInData: null })
      window.location.href = "/";
    }


  };
  componentWillount() {

  }



  render() {
    return (

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* admin routes */}
          {/* only go to sign in and up of not logged in */}
          <Route exact path="/admin/signin" render={(props) => this.state.loggedIn ? <Redirect to='/admin/directories' /> : <adminRoutes.Login {...props} setAuth={this.setAuth} />} />
          <Route exact path="/admin/register" render={(props) => this.state.loggedIn ? <Redirect to='/admin/directories' /> : <adminRoutes.Register {...props} setAuth={this.setAuth} />} />
          <Route exact path="/admin/add/directory">
          <adminRoutes.AddBusiness />
          </Route>
          <Route exact path="/admin/directories">
            <adminRoutes.Dashboard />
          </Route>
          <Route exact path="/admin/edit/business">
            <adminRoutes.EditBusiness />
          </Route>
          {/* can only visit if logged in logged in */}
          <Route exact path="/admin/**">
            {!this.state.loggedIn ? <Redirect to="/" /> : <adminRoutes.Dashboard setAuth={this.setAuth} />}
          </Route> 
        </Switch>
      </Router>
    )
  }
}

export default App;
