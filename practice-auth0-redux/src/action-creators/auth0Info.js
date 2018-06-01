import fetch from "isomorphic-fetch";
import { AUTH0_SIGNUP } from "../constants";
import {
	token,
	accessToken,
	access_token,
	getAccessToken
} from "../services/auth.js";
import Auth from "../services/auth.js";

const auth = new Auth();

export const signupAC = async (dispatch, getState) => {
	dispatch({ type: AUTH0_SIGNUP });
};

export const createAccount = (
	auth0Info,
	token,
	accessToken,
	auth0InfoReducer,
	access_token,
	getAccessToken,
	auth,
	Token
) => async (dispatch, getState) => {
	// dispatch({ type: AUTH0_SIGNUP });
	//const { auth, auth0Info, token, accessToken, auth0auth0InfoReducer } = props.auth;
	console.log("inside createAccount, before the fetch");
	console.log("auth0Info inside action creator", JSON.stringify(auth0Info));

	// await fetch(
	// 		"https://px-api.morphii.com/signup/v1/signup"
	// 	);
	// 		{
	// 			headers: {
	// 				'Authorization': `Bearer ${getAccessToken()}`,
	// 				"Content-Type": "application/json",
	//
	// 			},
	// 			method: "POST",
	// 			body: JSON.stringify(auth0Info)
	// 		}
	// 			.then(res => res.json())
	// 			.then(console.log("you've hit the createAccount AC successfully!"))
	// 			.catch(err => console.log("Error sending to signup api", err));
	//dispatch({ type: AUTH0_SIGNUP, payload: auth0Info });
	dispatch({ type: AUTH0_SIGNUP });
	console.log("auth0Info inside action creator", JSON.stringify(auth0Info));
	console.log("Token2", token);
	console.log("auth0InfoReducer", auth0InfoReducer);
	console.log("accessToken", accessToken);
	console.log("access_token", access_token);
	console.log("getAccessToken", getAccessToken);
	console.log("Token", token);
	console.log("auth", auth);
};
