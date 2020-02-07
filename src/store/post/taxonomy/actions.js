export default {
	updateTags({ commit }, tags) {
		commit('setTags', tags);
	},
	updateCategories({ commit }, categories) {
		commit('setCategories', categories);
	},
	updateSeoKeywords({ commit }, keywords) {
		commit('setSeoKeywords', keywords);
	},
}
