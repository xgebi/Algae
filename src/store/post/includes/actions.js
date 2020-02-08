export default {
	updateRemoveThemeCss({ commit }, removeThemeCss) {
		commit('setRemoveThemeCss', removeThemeCss);
	},
	updateCssContent({ commit }, cssContent) {
		commit('setCssContent', cssContent);
	},
	updateJsContent({ commit }, jsContent) {
		commit('setJsContent', jsContent);
	},
	updateThumbnailType({ commit }, thumbnailType) {
		commit('setThumbnailType', thumbnailType);
	},
	updateThumbnailContent({ commit }, thumbnailContent) {
		commit('setThumbnailContent', thumbnailContent);
	},
}