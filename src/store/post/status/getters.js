export default {
	getOutdated: (state) => {
		return state.outdated;
	},
	getStatus: (state) => {
		return state.status;
	},
	getPublishedDate: (state) => {
		return state.publishedDate;
	},
	getUpdatedDate: (state) => {
		return state.updatedDate;
	},
	getMigrated: (state) => {
		return state.migrated;
	},
	getMigrationApproved: (state) => {
		return state.migrationApproved;
	},
}