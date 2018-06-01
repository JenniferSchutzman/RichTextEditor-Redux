import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { Provider } from "react-redux";
//import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import { createAccount } from "./action-creators/auth0Info.js";



ReactDOM.render(

		<Provider store={store}>
			<App />
		</Provider>,

	document.getElementById("root")
);
registerServiceWorker();



store.dispatch(createAccount);
store.dispatch(createAccount());
