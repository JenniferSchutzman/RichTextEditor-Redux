import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
//import Typography from "material-ui/Typography";
import Auth from '../services/auth.js'

import {createAccount} from '../action-creators/auth0Info.js'

const Greeting = props => {
  const {classes, authOInfo, auth, user} = props;
console.log('auth inside GREETING', auth);
//console.log('auth0Info state insidarn e GREETING', JSON.stringify(auth0Info))
console.log('user state inside GREETING', JSON.stringify(user))
return (
  <center>

      You have sucessfully created an account!

  </center>
);
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
