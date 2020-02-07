<template>
  <div class="categories-box box">
    <ul v-if="categories && postCategories">
      <li v-for="(cat, index) in categories" v-bind:key="index">
        <input v-bind:id="cat.slug" v-model="postCategories[cat.slug]" type="checkbox" />
        <label :for="cat.slug">{{ cat.displayName }}</label>

        <ul v-if="cat.children && cat.children.length > 0">
          <li v-for="(child, j) in cat.children" v-bind:key="j">
            <input v-bind:id="child.slug" v-model="postCategories[child.slug]" type="checkbox" />
            <label :for="child.slug">{{ child.displayName }}</label>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
export default {
  name: "categories-box",
  components: {

  },
  props: [
    
  ],
  mounted() {
    this.postCategories
  },
  async created() {
    //let res = await this.changeUuid("a");
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters["settings/getCategories"]
      }
    },    
    postCategories: {
      get() {
        return this.$store.getters["post/taxonomy/getCategories"];
      },
      set(value) {
        console.log(value);
        this.$store.dispatch("post/taxonomy/updateCategories", value)
      }
    }
  },
  watch: {
    postCategories: { 
      handler: function(newVal) {
        this.postCategories = newVal;
      }, 
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
