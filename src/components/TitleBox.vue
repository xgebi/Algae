<template>
  <div class="title-box">
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
