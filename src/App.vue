<template>
  <div id="app">
    <MainView v-bind:token="token" v-bind:uuid="uuid" />
  </div>
</template>

<script lang="js">
import store from "./store";

import MainView from './views/MainView.vue';

export default {
  store,
  name: "App",
  props: [
    'token',
    'uuid'
  ],
  components: {
    MainView
  }
};
</script>

<style lang="scss" scoped>
</style>
