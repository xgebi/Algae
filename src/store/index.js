import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import post from './post';
import settings from './settings'
import PostService from '../services/PostService';


Vue.use(Vuex)

const actions = {
  async fetchPost({ commit, getters }, uuid) {
    debugger;
    let post = PostService.getPost(getters["auth/getToken"], uuid);
    if (!post.error) {
      commit('', null);
    }
  },
}

const store = {
  actions,
  modules: {
    auth,
    post,
    settings
  }
};

export default new Vuex.Store(store);

