import AuthService from "../../services/AuthService"

export default {
	async getFirstToken({ commit, dispatch }, token) {
		let newToken = await AuthService.getToken(token);
		if (!newToken.error) {
			commit('setToken', newToken.token);
			commit('setDisplayName', newToken.displayName);
			setInterval(function () {
				dispatch('getPeriodicTokenUpdate');
			}, 60000);
		} else {
			let url = window.location;
			window.location.replace(url.substring(0,
				url.indexOf("/", url.indexOf("//") + 2) + 1
			));
		}
	},
	async getPeriodicTokenUpdate({ commit, state }) {
		let newToken = await AuthService.getToken(state.token);
		if (!newToken.error) {
			commit('setToken', newToken.token);
		} else {
			let url = window.location;
			window.location.replace(url.substring(0,
				url.indexOf("/", url.indexOf("//") + 2) + 1
			));
		}
	}
}