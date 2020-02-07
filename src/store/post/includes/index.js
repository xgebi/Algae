import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    removeThemeCss: undefined,
    cssContent: undefined,
    jsContent: undefined,
    thumbnailType: undefined,
    thumbnailContent: undefined,
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}