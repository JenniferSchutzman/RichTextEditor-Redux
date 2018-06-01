import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { richTextEditorReducer } from "./reducers/customization/richTextEditor.js";


const store = createStore(
	combineReducers({
	richTextEditorReducer
	}),
	applyMiddleware(thunk)
);

export default store;
