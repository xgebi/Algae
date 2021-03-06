import SettingsService from "../../services/SettingsService";

export default {
	async getSettings({ commit, state }) {
		let settings = await SettingsService.getSettings(state.token);
		if (!settings.error) {
			console.log(settings);
			commit('setPostTypes', settings.postTypes);
			commit('setLanguages', settings.languages);
			commit('setThumbnailTypes', settings.thumbnailTypes);
			commit('setCategories', settings.categories);
			commit('setPostStatuses', settings.postStatuses);
		}
	}
}