import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import { auth0InfoReducer } from "./reducers/welcome/auth0Info.js";

const store = createStore(
	combineReducers({

		auth0InfoReducer

	}),
	applyMiddleware(thunk)
);

export default store;
