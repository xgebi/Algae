export default {
	setOutdated(state, outdatedness) {
		state.outdated = outdatedness;
	},

	setStatus(state, status) {
		state.status = status;
	},
	setPublishedDate(state, publishedDate) {
		state.publishedDate = publishedDate;
	},
	setUpdatedDate(state, updatedDate) {
		state.updatedDate = updatedDate;
	},
	setMigrated(state, migrated) {
		state.migrated = migrated;
	},
	setMigrationApproved(state, migrationApproved) {
		state.migrationApproved = migrationApproved;
	},
}