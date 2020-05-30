import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const LinksContainer = () => {
  return (
    <div>
        <SignedInLinks/>
        <SignedOutLinks/>
    </div>
  )
}

const mapStateToProps = (state: any) => {
    console.log(state);
    return{
        auth: state.firebase.auth
    }
  }

  export default connect(mapStateToProps)(LinksContainer)
