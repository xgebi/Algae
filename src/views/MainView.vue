<template>
  <div id="app">
    <LanguageBox />
    <TitleBox />
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
import TitleBox from "../components/TitleBox.vue";
import SeoBox from "../components/SeoBox.vue";
import IncludesBox from "../components/IncludesBox.vue";
import LanguageBox from "../components/LanguageBox.vue";

export default {
  name: "main-view",
  components: {
    TextEditor,
    ToolsBox,
    CategoriesBox,
    TagsBox,
    SeoBox,
    IncludesBox,
    LanguageBox,
    TitleBox,
  },
  props: [
    'token',
    'uuid'
  ],
  async mounted() {
    console.log(this.token, this.uuid);
    await this.getFirstToken(this.token);
    await this.getSettings();
    await this.fetchPost(this.uuid);
  },
  async created() {

  },
  methods: {
    ...mapActions({
      getFirstToken: "auth/getFirstToken",
      fetchPost: "fetchPost",
      getSettings: "settings/getSettings",
    })
  }
}

</script>

<style lang="scss">
.box {
  border: 1px solid hsl(0, 0%, 50%);
  padding: 0.25rem 0.5rem;
  margin: 0.25rem 0.5rem;

  textarea {
    width: 100%;
  }
}
</style>
