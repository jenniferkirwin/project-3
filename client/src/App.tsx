import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import SearchAppBar from './components/Nav/AppBar'
import LandingGrid from './components/LandingGrid/LandingGrid'
import Login from './components/Auth/LoginForm'
import CreateAccount from './components/Auth/CreateAccountForm'
import StudentHome from './components/studentHome/sudentHome'
import { AuthProvider } from "./components/Auth/auth.js"
import PrivateRoute from "./components/Auth//PrivateRoute.js";



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <SearchAppBar />
            <Switch>
              <PrivateRoute exact path='/'component={LandingGrid} />
              <Route path='/login' component={Login} />
              <Route path='/createaccount' component={CreateAccount} />
              <PrivateRoute path='/student-home' component={StudentHome} />
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
