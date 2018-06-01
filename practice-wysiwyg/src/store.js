import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { emailFormEntryReducer } from "./reducers/customization/emailFormEntry.js";


const store = createStore(
	combineReducers({
	emailFormEntryReducer
	}),
	applyMiddleware(thunk)
);

export default store;
