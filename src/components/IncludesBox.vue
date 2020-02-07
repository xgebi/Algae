<template>
  <div class="includes-box box">
    <div>
      <label for="css-box">CSS code:</label>
      <textarea id="css-box" v-model="css"></textarea>
      <label for="remove-theme-css">
        <input type="checkbox" v-model="removeThemeCss" id="remove-theme-css" /> Remove theme's CSS
      </label>
    </div>
    <div>
      <label for="js-box">JavaScript code:</label>
      <textarea id="js-box" v-model="js"></textarea>
    </div>
    <div>
      <label for="thumbnailType">Thumbnail Type</label>
      <select v-model="thumbnailType">
        <option
          v-for="type in thumbnailTypes"
          :value="type"
          :key="type"
          :selected="thumbnailType == type"
        >{{type}}</option>
      </select>
    </div>
    <div v-if="thumbnailType === 'code'">
      <label for="thumbnail">Thumbnail:</label>
      <textarea id="thumbnail" v-model="thumbnailContent"></textarea>
    </div>
    <div v-else>
      <label for="thumbnail">Thumbnail:</label>
      <input v-model="thumbnailContent" id="thumbnail" type="text" />
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "includes-box",
  components: {

  },
  props: [
    
  ],
  mounted() {},
  async created() {
  },
  computed: {
    css: {
      get() {
        return this.$store.getters["post/includes/getCssContent"]
      },
      set(value) {
        this.$store.dispatch("post/includes/updateCssContent", value)
      }
    },
    removeThemeCss: {
      get() {
        return this.$store.getters["post/includes/getRemoveThemeCss"]
      },
      set(value) {
        this.$store.dispatch("post/includes/updateRemoveThemeCss", value)
      }
    },
    js: {
      get() {
        return this.$store.getters["post/includes/getJsContent"]
      },
      set(value) {
        this.$store.dispatch("post/includes/updateJsContent", value)
      }
    },
    thumbnailTypes: {
      get() {
        return this.$store.getters["settings/getThumbnailTypes"]
      }
    },
    thumbnailType: {
      get() {
        return this.$store.getters["post/includes/getThumbnailType"];
      },
      set(value) {
        if (value !== this.$store.getters["post/includes/getThumbnailType"]) {
          this.thumbnailContent = "";  
        }
        this.$store.dispatch("post/includes/updateThumbnailType", value)
      }
    },
    thumbnailContent: {
      get() {
        return this.$store.getters["post/includes/getThumbnailContent"]
      },
      set(value) {
        this.$store.dispatch("post/includes/updateThumbnailContent", value)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
