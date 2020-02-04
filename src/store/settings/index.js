import actions from './actions';
import mutations from './mutations';
import getters from './getters';


export const state = {
	blogLanguages: [],
	postTypes: []
};

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}