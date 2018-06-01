import React, { Component } from "react";
import { bindActionCreators } from 'redux';

import Auth from '../services/auth.js'

import {createAccount} from '../action-creators/auth0Info.js'

const Greetings = props => {
  const {classes, authOInfo, auth, user} = props;
console.log('auth inside GREETING', auth);
console.log('auth0Info state inside GREETING', JSON.stringify(auth0Info))
console.log('user state inside GREETING', JSON.stringify(user))
return (
  <h1>
  You have successfully created an account <h1>

)
}

const mapStateToProps = state => {
  return {
    auth0Info: state.auth0InfoReducer,
    user: state.auth0InfoReducer.user
  }
}

const mapActionsToProps = dispatch => {
  return bindActionCreators({createAccount: createAccount}, dispatch)
}

const connector = connect(mapStateToProps, mapActionsToProps);

export default connector(Greeting)
