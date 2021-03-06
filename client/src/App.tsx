import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import LandingGrid from './components/LandingGrid/LandingGrid'

//Authentication
import { AuthProvider } from "./components/Auth/auth.js"
import PrivateRoute from "./components/Auth//PrivateRoute.js";

//Authentication Components
import Login from './components/Auth/LoginForm'
import CreateAccount from './components/Auth/CreateAccountForm'

//Student Components
import StudentHome from './components/studentHome/sudentHome'
import CourseSearch from './components/CourseSearch/CourseSearch'
import StudentGrade from './components/StudentGrade/studentGrade'

//Teacher Components
import ClassHoursPage from './pages/Main/ClassHoursPage'
import GradesPage from './pages/Main/GradesPage'
import MainTeacher from './pages/Main/MainTeacher'
import UploadAssign from './pages/Main/UploadAssign'


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <PrivateRoute exact path='/'component={LandingGrid} />
              <Route path='/login' component={Login} />
              <Route path='/createaccount' component={CreateAccount} />
              {/*<Route path ='*'><Redirect to='/' /></Route>*/}

              <PrivateRoute exact path='/student-course-search' component={CourseSearch} />
              <PrivateRoute exact path='/student-grades' component={StudentGrade} />
              
              <PrivateRoute path='/teacher-grades' component={GradesPage} />
              <PrivateRoute path='/teacher-class-hours' component={ClassHoursPage} />
              <PrivateRoute path='/teacher-upload-assignment' component={UploadAssign} />
            </Switch>
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
