import React, { Component } from 'react';
import { Route, Switch, Router, Redirect } from 'react-touer-dom';
import logo from './logo.svg';
import './App.css';
import history from './history';
import Welcome from './pages/welcome';
import { Login, Callback, Secure } from './services/authlogins.js';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div>
					<Switch>
						<Route exact path="/" component={Secure(Welcome)} />
						<Route path="/login" component={Login} />
						<Route path="/callback" component={Callback} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
