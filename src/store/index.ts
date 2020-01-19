import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import actions from './actions';
import mutations from './mutations';
//import getters from './getters';
import { EditorState } from './types';


Vue.use(Vuex)

const store: StoreOptions<EditorState> = {
  state: {
    initialState: 1
  },
  //getters,
  mutations,
  actions
}

export default new Vuex.Store<EditorState>(store);
