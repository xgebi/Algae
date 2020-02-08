import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import post from './post';
import settings from './settings'
import PostService from '../services/PostService';


Vue.use(Vuex)

const actions = {
  async fetchPost({ getters, dispatch }, uuid) {
    let post = await PostService.getPost(getters["auth/getToken"], uuid);
    if (!post.error) {
      dispatch('updateWholePost', post);
    }
  },
  async fetchDifferentLanguagePost({ getters, dispatch }, lang) {
    let post = await PostService.getDifferentLanguagePost(getters["auth/getToken"], getters["post/basic/getUuid"], lang);
    if (!post.error) {
      dispatch('updateWholePost', post);
    }
  },
  updateWholePost({ commit }, post) {
    // Basic
    commit('post/basic/setUuid', post.uuid);
    commit('post/basic/setOriginalUuid', post.originalUuid);
    commit('post/basic/setTitle', post.title);
    commit('post/basic/setBody', post.body);
    commit('post/basic/setExcerpt', post.excerpt);
    commit('post/basic/setUrl', post.url);
    commit('post/basic/setPostType', post.postType);

    // includes
    commit('post/includes/setRemoveThemeCss', post.removeThemeCss);
    commit('post/includes/setCssContent', post.cssContent);
    commit('post/includes/setJsContent', post.jsContent);
    commit('post/includes/setThumbnailType', post.thumbnailType);
    commit('post/includes/setThumbnailContent', post.thumbnailContent);

    // status
    commit('post/status/setOutdated', post.outdated);
    commit('post/status/setStatus', post.status);
    commit('post/status/setPublishedDate', post.publishedDate);
    commit('post/status/setUpdatedDate', post.updatedDate);
    commit('post/status/setMigrated', post.migrated);
    commit('post/status/setMigrationApproved', post.migrationApproved);

    // taxonomy
    commit('post/taxonomy/setTags', post.tags);
    commit('post/taxonomy/setCategories', post.categories);
    commit('post/taxonomy/setSeoKeywords', post.seoKeywords);

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

      "removeThemeCss": getters["post/includes/getRemoveThemeCss"],
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
  },
  publishPost({ getters, dispatch }) {
    const post = PostService.savePost(getters["auth/getToken"], {
      "uuid": getters["post/basic/getUuid"],
      "originalUuid": getters["post/basic/originalUuid"],
      "title": getters["post/basic/getTitle"],
      "body": getters["post/basic/getBody"],
      "excerpt": getters["post/basic/getExcerpt"],
      "url": getters["post/basic/getUrl"],
      "postType": getters["post/basic/getPostType"],

      "removeThemeCss": getters["post/includes/getRemoveThemeCss"],
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

      publish: true
    });
    dispatch('updateWholePost', post);
  },
  deletePost({ getters, dispatch }) {
    const result = PostService.deletePost(getters["auth/getToken"], { uuid: getters["post/basic/getUuid"], softDelete: true });
    if (result && result["delete"] === 1) {
      dispatch('updateWholePost', {
        "uuid": undefined,
        "originalUuid": getters["post/basic/originalUuid"],
        "title": undefined,
        "body": undefined,
        "excerpt": undefined,
        "url": undefined,
        "postType": undefined,

        "removeThemeCss": undefined,
        "cssContent": undefined,
        "jsContent": undefined,
        "thumbnailType": undefined,
        "thumbnailContent": undefined,

        "outdated": undefined,
        "status": undefined,
        "publishedDate": undefined,
        "updatedDate": undefined,
        "migrated": undefined,
        "migrationApproved": undefined,

        "tags": undefined,
        "categories": undefined,
        "seoKeywords": undefined,
      }
      );
    }
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

