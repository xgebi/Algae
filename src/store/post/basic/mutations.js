export default {
	setUuid(state, uuid) {
		state.uuid = uuid;
	},

	setOriginalUuid(state, uuid) {
		state.originalUuid = uuid;
	},

	setTitle(state, title) {
		state.title = title;
	},

	setBody(state, body) {
		state.body = body;
	},

	setExcerpt(state, excerpt) {
		state.excerpt = excerpt;
	},

	setUrl(state, url) {
		state.url = url;
	},

	setPostType(state, postType) {
		state.postType = postType;
	}
}