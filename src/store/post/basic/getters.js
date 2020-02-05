export default {
	getUuid: (state) => {
		return state.uuid;
	},
	getOriginalUuid: (state) => {
		return state.originalUuid;
	},
	getTitle: (state) => {
		return state.title;
	},
	getBody: (state) => {
		return state.body;
	},
	getExcerpt: (state) => {
		return state.excerpt;
	},
	getUrl: (state) => {
		return state.url;
	},
	getPostType: (state) => {
		return state.postType;
	}
}