import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import app from "./../../../config/fbConfig.js";
import Grid from '@material-ui/core/Grid';
import { AuthContext } from "./../auth.js";


const SignedInLinks = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (
      <div>
        <button 
          className="btn waves-effect waves-light btn-small grey darken-3 z-depth-0" 
          style={{width: 150}}
          onClick={() => app.auth().signOut()}
        >
          Sign out
        </button>
      </div>
    )
  } else {
    return <div></div>
  } 
}

export default SignedInLinks
