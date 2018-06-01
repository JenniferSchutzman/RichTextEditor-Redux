//import auth0 from "auth0-js";
import React from 'react';
import { not } from 'ramda';
import { Redirect } from 'react-router-dom';
import Auth from './auth.js';

const auth = new Auth();

export function Login() {
	auth.login();
	//console.log('logged in')
	return null;
}

export function Callback() {
	auth.handleAuthentication();
	//console.log('inside auth.handleAuthentication')
	return null;
}

export function Secure(Component) {
	//console.log('hit secure')
	return function(props) {
		if (not(auth.isAuthenticated())) {
			//   console.log('inside secure props', props)
			return <Redirect to="/login" />;
		}
		return (
			<Component {...props} token={auth.token()} logout={() => auth.logout()} />
		);
		//console.log('secure auth.token', auth.token)
	};
}
