//  REACT SETUP
import React, { Component } from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import history from "./history";
import "./App.css";
// SECURITY

// ORGANIZED COMPONENTS FROM INDEX PAGES
import Customization from "./pages/customization";


// LIBRARY
import { not } from "ramda";

const auth = new Auth();
// <Route exact path="/profile" component={Secure(Account)} />
class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div>
					<Switch>

						<Route
							exact
							path="/customization"
							component={Customization}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
