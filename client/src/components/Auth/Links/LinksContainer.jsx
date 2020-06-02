import React, { useContext } from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { AuthContext } from "./../auth.js";

const LinksContainer = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (
      <div>
        <SignedInLinks/>
      </div>
    )
  } else {
    return (
      <div>
        <SignedOutLinks/>
      </div>
    )
  }
}



  export default LinksContainer
