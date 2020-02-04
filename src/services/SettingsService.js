const SettingsService = {
	async getSettings(token) {
		const response = await fetch(process.env.VUE_APP_API_URL + "api/settings", {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Token ${token}`
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
		});
		return await response.json();
	}
};

export default SettingsService;