import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import post from './post';
import settings from './settings'
import PostService from '../services/PostService';


Vue.use(Vuex)

const actions = {
  async fetchPost({ getters, dispatch }, uuid) {
    let post = PostService.getPost(getters["auth/getToken"], uuid);
    if (!post.error) {
      dispatch('updateWholePost', post);
    }
  },
  async fetchDifferentLanguagePost({ getters, dispatch }, lang) {
    let post = PostService.getDifferentLanguagePost(getters["auth/getToken"], getters["post/basic/getUuid"], lang);
    if (!post.error) {
      dispatch('updateWholePost', post);
    }
  },
  updateWholePost({ commit }, post) {
    // Basic
    commit('setUuid', post.uuid);
    commit('setOriginalUuid', post.originalUuid);
    commit('setTitle', post.title);
    commit('setBody', post.body);
    commit('setExcerpt', post.excerpt);
    commit('setUrl', post.url);
    commit('setPostType', post.postType);

    // includes
    commit('setIncludeThemeCss', post.includeThemeCss);
    commit('setCssContent', post.cssContent);
    commit('setJsContent', post.jsContent);
    commit('setThumbnailType', post.thumbnailType);
    commit('setThumbnailContent', post.thumbnailContent);

    // status
    commit('setOutdated', post.outdated);
    commit('setStatus', post.status);
    commit('setPublishedDate', post.publishedDate);
    commit('setUpdatedDate', post.updatedDate);
    commit('setMigrated', post.migrated);
    commit('setMigrationApproved', post.migrationApproved);

    // taxonomy
    commit('setTags', post.tags);
    commit('setCategories', post.categories);
    commit('setSeoKeywords', post.seoKeywords);
  },
  savePost({ getters, dispatch }) {
    const post = PostService.savePost(getters["auth/getToken"], {
      "uuid": getters["post/basic/getUuid"],
      "originalUuid": getters["post/basic/originalUuid"],
      "title": getters["post/basic/getTitle"],
      "body": getters["post/basic/getBody"],
      "excerpt": getters["post/basic/getExcerpt"],
      "url": getters["post/basic/getUrl"],
      "postType": getters["post/basic/getPostType"],

      "includeThemeCss": getters["post/includes/getIncludeThemeCss"],
      "cssContent": getters["post/includes/getCssContent"],
      "jsContent": getters["post/includes/getJsContent"],
      "thumbnailType": getters["post/includes/getThumbnailType"],
      "thumbnailContent": getters["post/includes/getThumbnailContent"],

      "outdated": getters["post/status/getOutdated"],
      "status": getters["post/status/getStatus"],
      "publishedDate": getters["post/status/getPublishedDate"],
      "updatedDate": getters["post/status/getUpdatedDate"],
      "migrated": getters["post/status/getMigrated"],
      "migrationApproved": getters["post/status/getMigrationApproved"],

      "tags": getters["post/taxonomoy/getTags"],
      "categories": getters["post/taxonomoy/getCategories"],
      "seoKeywords": getters["post/taxonomoy/getSeoKeywords"],
    });
    dispatch('updateWholePost', post);
  }
}

const store = {
  actions,
  modules: {
    auth,
    post,
    settings,
    // TODO gallery
  }
};

export default new Vuex.Store(store);

