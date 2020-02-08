export default {
	getBlogLanguages: (state) => {
		return state.blogLanguages;
	},
	getPostTypes: (state) => {
		return state.postTypes;
	},
	getThumbnailTypes: (state) => {
		return state.thumbnailTypes;
	},
	getCategories: (state) => {
		return state.categories;
	},
	getPostStatuses: (state) => {
		return state.postStatuses;
	}
}