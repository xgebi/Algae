import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    includeThemeCss: true,
    cssContent: "",
    jsContent: "",
    thumbnailType: "",
    thumbnailContent: ""
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}