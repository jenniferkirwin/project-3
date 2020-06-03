import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import app from "./../../../config/fbConfig.js";
import Grid from '@material-ui/core/Grid';
import { AuthContext } from "./../auth.js";


const SignedInLinks = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return (
      <div>
          <Grid container spacing={3}>

            <Grid item xs={6}>
              <NavLink to='/createaccount'>
                <button 
                  className="btn waves-effect waves-light btn-small amber lighten-1 z-depth-0"
                  style={{width: 175}}
                >
                  Create Account
                </button>
              </NavLink>
            </Grid>

            <Grid item xs={6}>
              <NavLink to='/login'>
                <button 
                  className="btn waves-effect waves-light btn-small green accent-2 z-depth-0"
                  style={{width: 175}}
                >
                  Log In
                </button>
              </NavLink>
            </Grid>

          </Grid>
        </div>
    )
  } else {
    return <div></div>
  } 
}

export default SignedInLinks
