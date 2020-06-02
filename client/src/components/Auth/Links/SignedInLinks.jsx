import React from 'react'
import { NavLink } from 'react-router-dom'
import app from "./../../../config/fbConfig.js";


const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/createaccount'>Create Account</NavLink></li>
        <button className="btn waves-effect waves-light btn-small lighten-1 z-depth-0" onClick={() => app.auth().signOut()}>Sign out</button>
      </ul>
    </div>
  )
}

export default SignedInLinks
