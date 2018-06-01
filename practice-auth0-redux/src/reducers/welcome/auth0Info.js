import { combineReducers } from "redux";
import {
	merge,
	// map,
	// props,
	// flatten,
	has
} from "ramda";
import { AUTH0_SIGNUP } from "../../constants";
import Auth from "../../services/auth.js";

const auth = new Auth();
/*
////////////// 	GOOGLE	////////////
family_name: --> last_name
given_name:  --> first_name
///////////////  	Auth0  	///////////
profile: {
	"sub":  --> userID
	"name": --> email,
	"https://auth0.morhpii.com/user":{
		first_name: "",
		last_name: ""
	}
}
/////////////  Microsoft //////////////
profile: {
	"family_name": --> last_name,
	"given_name": --> first_name,
	"email": --> email
}
*/
const initialState = {
	account: {
		name: "Insights Test Business"
	},
	user: {
		first_name: "",
		last_name: "",
		email: "",
		user_id: ""
	}
};

export const auth0InfoReducer = (state = { initialState }, action) => {
	switch (action.type) {
		case AUTH0_SIGNUP:
			const profile = auth.getProfile();
			const newState = initialState.user;
			has("given_name", profile)
				? (newState.first_name = profile.given_name)
				: profile;
			has("first_name", profile)
				? (newState.first_name = profile.first_name)
				: profile;
			has("family_name", profile)
				? (newState.last_name = profile.family_name)
				: profile;
			has("last_name", profile)
				? (newState.last_name = profile.last_name)
				: profile;
			has("email", profile) ? (newState.email = profile.email) : profile;
			has("sub", profile) ? (newState.user_id = profile.sub) : profile;
			console.log(
				"Final initalState in REDUCER",
				JSON.stringify(initialState)
			);
			return merge(initialState, state);
		default:
			return initialState;
	}
};
