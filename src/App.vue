<template>
  <div id="app">
    <TextEditor />
    <ToolBox />
    <CategoryBox />
    <TagsBox />
    <SeoBox />
    <IncludesBox />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextEditor from "./components/TextEditor.vue";
import ToolsBox from "./components/ToolsBox.vue";
import CategoriesBox from "./components/CategoriesBox.vue";
import TagsBox from "./components/TagsBox.vue";
import SeoBox from "./components/SeoBox.vue";
import IncludesBox from "./components/IncludesBox.vue";

@Component({
  components: {
    TextEditor,
    ToolsBox,
    CategoriesBox,
    TagsBox,
    SeoBox,
    IncludesBox
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
