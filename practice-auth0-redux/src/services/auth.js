import auth0 from 'auth0-js';
import history from '../history';
import React, { Component } from 'react';

export default class Auth extends Component {
	auth0 = new auth0.WebAuth({
		domain: 'morphii-dev.auth0.com',
		clientID: 'EA3orWtHNQYVQsleYqmGQRx51GgisLUJ',
		redirectUri: 'http://localhost:3000/callback',
		audience: 'https://morphii-dev.auth0.com/userinfo',
		responseType: 'token id_token',
		scope: 'openid email profile'
	});
	userProfile;
	constructor() {
		super();
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.isAuthenticated = this.isAuthenticated.bind(this);
	}
	login() {
		this.auth0.authorize();
	}
	token() {
		return localStorage.getItem('access_token');
	}

	async handleAuthentication() {
		try {
			const authResult = await this.parseHash();
			if (authResult && authResult.accessToken && authResult.idToken) {
				const profile = await this.userInfo(authResult.accessToken);
				if (profile) {
					this.setSession(authResult, profile);
					history.replace('/');
				}
			}
		} catch (error) {}
	}
	parseHash() {
		return new Promise((resolve, reject) => {
			this.auth0.parseHash((error, authResult) => {
				if (error) {
					reject(error);
				} else {
					resolve(authResult);
				}
			});
		});
	}

	setSession(authResult, profile) {
		let expiresAt = JSON.stringify(
			authResult.expiresIn * 1000 + new Date().getTime()
		);

		//console.log("setSession, authResult", authResult);
		//console.log("setSession, profile", profile);
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
		localStorage.setItem('profile', JSON.stringify(profile));
		history.replace('/');
	}

	logout() {
		localStorage.removeItem('access_token');
		localStorage.removeItem('id_token');
		localStorage.removeItem('expires_at');
		localStorage.removeItem('profile');

		history.replace('/');
	}

	isAuthenticated() {
		let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
		return new Date().getTime() < expiresAt;
	}

	userInfo(accessToken) {
		return new Promise((resolve, reject) => {
			this.auth0.client.userInfo(accessToken, (error, profile) => {
				console.log('accessToken inside userInfo', accessToken);
				console.log('profile inside userInfo', profile);
				if (error) {
					reject(error);
				} else {
					resolve(profile);
				}
			});
		});
	}
	renewToken() {
		return new Promise((resolve, reject) => {
			this.auth0.checkSession({}, (err, result) => {
				if (err) {
					alert('Could not get a new token');
				} else {
					this.setSession(result);
					alert('successfully renewed auth!');
				}
			});
		});
	}
	getAccessToken() {
		const accessToken = localStorage.getItem('access_token');
		if (!accessToken) {
			return null;
		}
		return accessToken;
	}
	getProfile() {
		const profile = localStorage.getItem('profile');
		if (!profile) {
			return null;
		}
		return JSON.parse(profile);
	}
}
