import React, { useContext } from 'react'
import app from "./../../../config/fbConfig.js";
import { AuthContext } from "./../auth.js";


const SignedInLinks = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (
      <div style={{ paddingLeft: '300px' }}>
        <button 
          className="btn waves-effect waves-light btn-small grey darken-3 z-depth-0" 
          style={{width: 150}}
          onClick={() => app.auth().signOut().then(sessionStorage.clear())}
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
