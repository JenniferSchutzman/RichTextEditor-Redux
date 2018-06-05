import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { emailFormEntryReducer } from "./reducers/customization/emailFormEntry.js";


const store = createStore(
	combineReducers({
	emailFormEntryReducer
	}),
compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
	)
 );

 export default store;
