import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    outdated: undefined,
    status: undefined,
    publishedDate: undefined,
    updatedDate: undefined,
    migrated: undefined,
    migrationApproved: undefined
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
}