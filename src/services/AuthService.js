const AuthService = {
	async getToken(initialToken) {
		const response = await fetch(process.env.VUE_APP_API_URL + "api/token", {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Token ${initialToken}`
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
		});
		return await response.json();
	}
};

export default AuthService;