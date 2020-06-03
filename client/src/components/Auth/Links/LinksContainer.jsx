import React from 'react'
import { NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const LinksContainer = () => {
  return (
    <div>
        <SignedInLinks/>
        <SignedOutLinks/>
    </div>
  )
}

export default LinksContainer