import { combineReducers } from "redux";
import {

	ENTERED_RICH_EDITOR_TEXT

} from "../../constants";
import { merge, map } from "ramda";
//import emailValidationErrors from "../validations/emailEntry";
//import isValid from "../validations/is-valid.js";

const initialState = {
	emailInfo: [{ emailSubject: "" }, { emailFrom: "" }],
	richEditor: null
};

export const emailFormEntryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ENTERED_RICH_EDITOR_TEXT:
			console.log("action.payload", JSON.stringify(action.payload));
			console.log("initial state inside the reducer", initialState)
			console.log('state inside the reducer', state)
			return merge(state.richEditor,action.payload);
		default:
			return state;
	}
};
