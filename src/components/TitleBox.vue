<template>
  <div class="title-box box">
    <div>
      <label for="title">Title</label>
      <input id="title" v-model="title" type="text" />
    </div>
    <div>
      <label for="url">Url</label>
      <input id="url" v-model="url" type="text" />
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "title-box",
  components: {

  },
  props: [
    
  ],
  computed: {
    title: {
      get() {
        return this.$store.getters["post/basic/getTitle"]
      },
      set(value) {
        this.$store.dispatch("post/basic/setTitle", value)
      }
    },
    url: {
      get() {
        return this.$store.getters["post/basic/getUrl"]
      },
      set(value) {
        this.$store.dispatch("post/basic/setUrl", value)
      }
    }
  },
  mounted() {},
  async created() {
    //let res = await this.changeUuid("a");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
