import { combineReducers } from "redux";
import {
	RICH_TEXT_EDITOR
} from "../../constants";

import { merge, map } from "ramda";

const initialState = {
	richEditor: [{ text: null }]
};

export const richTextEditorReducer = (state = initialState, action) => {
	switch (action.type) {
		case RICH_TEXT_EDITOR:
			console.log("action.paylaod", JSON.stringify(action.payload));
			return state;
		default:
			return state;
	}
};
