<template>
  <div id="app">
    {{ this.token }} {{ this.uuid }}
    <TextEditor />
    <ToolsBox />
    <CategoriesBox />
    <TagsBox />
    <SeoBox />
    <IncludesBox />
  </div>
</template>

<script lang="js">
  import {mapActions} from 'vuex';

import TextEditor from "../components/TextEditor.vue";
import ToolsBox from "../components/ToolsBox.vue";
import CategoriesBox from "../components/CategoriesBox.vue";
import TagsBox from "../components/TagsBox.vue";
import SeoBox from "../components/SeoBox.vue";
import IncludesBox from "../components/IncludesBox.vue";

export default {
  name: "main-view",
  components: {
    TextEditor,
    ToolsBox,
    CategoriesBox,
    TagsBox,
    SeoBox,
    IncludesBox
  },
  props: [
    'token',
    'uuid'
  ],
  mounted() {
    this.getFirstToken(this.token.token);
    this.fetchPost(this.uuid.uuid);
  },
  async created() {

  },
  methods: {
    ...mapActions({
      getFirstToken: "auth/getFirstToken",
      fetchPost: "fetchPost"
    })
  }
}

</script>

<style lang="scss" scoped>
</style>
