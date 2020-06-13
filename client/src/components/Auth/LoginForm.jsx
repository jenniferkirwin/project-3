import React, { useCallback, useContext, useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./../../config/fbConfig.js";
import { AuthContext } from "./auth.js";
import LoggedOutNav from './LoggedOutNav';
import API from './../../util/authApi';




const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          history.push("/")
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  //Redirect to homepage if there is already a user signed in
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <LoggedOutNav />
      <div className="container">
        <form className="white" onSubmit={handleLogin}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
          </div>
          <div className="input-field">
            <button className="btn waves-effect waves-light lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    </div>
  )

}


export default withRouter(SignIn);
