import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    tags: undefined,
    categories: undefined,
    seoKeywords: undefined,
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}