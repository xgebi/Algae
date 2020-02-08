export default {
	updateOutdated({ commit }, outdatedness) {
		commit('setOutdated', outdatedness);
	},
	updatePublishedDate({ commit }, publishedDate) {
		commit('setPublishedDate', publishedDate);
	},
	updateUpdatedDate({ commit }, updatedDate) {
		commit('setUpdatedDate', updatedDate);
	},
	updateMigrated({ commit }, migrated) {
		commit('setMigrated', migrated);
	},
	updateMigrationApproved({ commit }, migrationApproved) {
		commit('setMigrationApproved', migrationApproved);
	},
	updateStatus({ commit }, status) {
		commit('setStatus', status);
	},
}