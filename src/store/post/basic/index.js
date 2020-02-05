import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    uuid: "1234",
    originalUuid: "",
    title: "title",
    body: "",
    excerpt: "",
    url: "",
    postType: ""
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}