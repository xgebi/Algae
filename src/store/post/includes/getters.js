export default {
	getIncludeThemeCss: (state) => {
		return state.includeThemeCss;
	},
	getCssContent: (state) => {
		return state.cssContent;
	},
	getJsContent: (state) => {
		return state.jsContent;
	},
	getThumbnailType: (state) => {
		return state.thumbnailType;
	},
	getThumbnailContent: (state) => {
		return state.thumbnailContent;
	},
}