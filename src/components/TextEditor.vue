<template>
  <div class="editor">
    <div>
      <div>
        <button>Bold</button>
        <button>Italic</button>
        <button>Underscore</button>
      </div>
      <textarea v-model="body"></textarea>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "text-editor",
  components: {

  },
  props: [
    
  ],
  mounted() {
    
  },
  async created() {
  },  
  computed: {
    body: {
      get() {
        return this.$store.getters["post/basic/getBody"]
      },
      set(value) {
        this.$store.dispatch("post/basic/setBody", value)
      }
    },
    excerpt: {
      get() {
        return this.$store.getters["post/basic/getExcerpt"]
      },
      set(value) {
        this.$store.dispatch("post/basic/setExcerpt", value)
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
