import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import SearchAppBar from './components/Nav/AppBar';
import LandingGrid from './components/LandingGrid/LandingGrid';
import Login from './components/Auth/LoginForm';
import CreateAccount from './components/Auth/CreateAccountForm'
import StudentHome from './components/studentHome/sudentHome'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchAppBar />
          <Switch>
            <Route exact path='/'component={LandingGrid} />
            <Route path='/login' component={Login} />
            <Route path='/createaccount' component={CreateAccount} />
            <Route path='/student-home' component={StudentHome} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
