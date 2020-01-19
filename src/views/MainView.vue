<template>
  <div id="app">
    {{ authToken }}
    {{ token2 }}
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
import {
  State,
  Getter,
  Action,
  Mutation
} from 'vuex-class'

import TextEditor from "../components/TextEditor.vue";
import ToolsBox from "../components/ToolsBox.vue";
import CategoriesBox from "../components/CategoriesBox.vue";
import TagsBox from "../components/TagsBox.vue";
import SeoBox from "../components/SeoBox.vue";
import IncludesBox from "../components/IncludesBox.vue";

const namespace: string = 'general';

@Component({
  components: {
    TextEditor,
    ToolsBox,
    CategoriesBox,
    TagsBox,
    SeoBox,
    IncludesBox,
  }
})
export default class MainView extends Vue {
  @Prop() private token!: any;

  @Prop() private postId!: any;

  @Getter("token") token2: any;

  //@Action("")

  mounted() {
  }

  
  get authToken() {
    return this.token.token;  
  }

  get postUUID() {
    return this.postId.postId;
  }

  created() {

  }

}
</script>

<style lang="scss" scoped>
</style>
