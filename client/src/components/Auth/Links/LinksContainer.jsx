import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const LinksContainer = (props) => {
  const { auth } = props;
  return (
    <div>
        <SignedInLinks/>
        <SignedOutLinks/>
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth
    }
  }

  export default LinksContainer
