<template>
  <div class="tags-box box">
    <label for="tegs">Tags:</label>
    <textarea v-model="tags"></textarea>
  </div>
</template>

<script lang="js">
export default {
  name: "tags-box",
  components: {

  },
  props: [
    
  ],
  mounted() {},
  async created() {
    //let res = await this.changeUuid("a");
  },
  computed: {
    tags: {
      get() {
        return this.$store.getters["post/taxonomoy/getTags"]
      },
      set(value) {
        this.$store.dispatch("post/taxonomoy/updateTags", value)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
