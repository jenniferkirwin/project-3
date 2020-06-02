import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import SearchAppBar from './components/Nav/AppBar';
import LandingGrid from './components/LandingGrid/LandingGrid';
import Login from './components/Auth/LoginForm';
import CreateAccount from './components/Auth/CreateAccountForm';
import Calender from './components/Calender/Calender';
import UploadAssign from './pages/Main/UploadAssign';
import GradesPage from './pages/Main/GradesPage';
import ClassHoursPage from './pages/Main/ClassHoursPage';

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
            <Route path='/calendar' component={Calender} />
            <Route path='/teachhome' component={ClassHoursPage} />
            <Route path='/teachassignment' component={UploadAssign} />
            <Route path='/teachgrade' component={GradesPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
