<template>
  <div class="seo-box box">
    <label for="keywords">SEO keywords</label>
    <textarea v-model="keywords"></textarea>
  </div>
</template>

<script lang="js">
export default {
  name: "seo-box",
  components: {

  },
  props: [
    
  ],
  mounted() {},
  async created() {
    //let res = await this.changeUuid("a");
  },
  computed: {
    keywords: {
      get() {
        return this.$store.getters["post/taxonomoy/getSeoKeywords"]
      },
      set(value) {
        this.$store.dispatch("post/taxonomoy/updateSeoKeywords", value)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
