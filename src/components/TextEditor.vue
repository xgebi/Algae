<template>
  <div class="editor">
    <div>
      <button>Bold</button>
      <button>Italic</button>
      <button>Underscore</button>
    </div>
    <textarea></textarea>
  </div>
</template>

<script lang="js">
import { mapGetters } from 'vuex';

export default {
  name: "text-editor",
  components: {

  },
  props: [
    
  ],
  mounted() {
    
  },
  async created() {
    //let res = await this.changeUuid("a");
  },  
  computed: {
    ...mapGetters({
        getPostUuid: "post/basic/getUuid"
    })
  }
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
