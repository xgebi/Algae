<template>
  <div id="app">
    <MainView :token="{token}" :postId="{postId}" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "./store";

import MainView from './views/MainView.vue';

export default {
  store,
  name: "App",
  props: {    
    token: {
      type: String
    },
    postId: {
      type: String
    }
  },
  components: {
    MainView
  }
};
</script>

<style lang="scss" scoped>
</style>
