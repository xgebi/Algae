import actions from './actions';
import mutations from './mutations';
import getters from './getters';


export const state = {
	blogLanguages: undefined,
	postTypes: undefined,
	thumbnailTypes: undefined,
	categories: undefined,
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}