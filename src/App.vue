<template>
  <div id="app">
    {{ token }}
    <TextEditor />
    <ToolsBox />
    <CategoriesBox />
    <TagsBox />
    <SeoBox />
    <IncludesBox />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "./store";

import TextEditor from "./components/TextEditor.vue";
import ToolsBox from "./components/ToolsBox.vue";
import CategoriesBox from "./components/CategoriesBox.vue";
import TagsBox from "./components/TagsBox.vue";
import SeoBox from "./components/SeoBox.vue";
import IncludesBox from "./components/IncludesBox.vue";

export default {
  store,
  name: "App",
  props: ["token"],
  components: {
    TextEditor,
    ToolsBox,
    CategoriesBox,
    TagsBox,
    SeoBox,
    IncludesBox
  }
};
</script>

<style lang="scss" scoped>
</style>
