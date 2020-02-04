import SettingsService from "../../services/SettingsService";

export default {
	async getPeriodicTokenUpdate({ commit, state }) {
		let settings = await SettingsService.getSettings(state.token);
		if (!settings.error) {
			commit('setPostTypes', settings.postTypes);
			commit('setLanguages', settings.languages);
		}
	}
}