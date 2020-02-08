export default {
	setLanguages: (state, languages) => {
		state.blogLanguages = languages;
	},
	setPostTypes: (state, postTypes) => {
		state.postTypes = postTypes;
	},
	setThumbnailTypes: (state, thumbnailTypes) => {
		state.thumbnailTypes = thumbnailTypes;
	},
	setCategories: (state, categories) => {
		state.categories = categories;
	},
	setPostStatuses: (state, postStatuses) => {
		state.postStatuses = postStatuses;
	}
}