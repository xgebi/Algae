import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    outdated: false,
    status: undefined,
    published_date: undefined,
    updated_date: undefined,
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}