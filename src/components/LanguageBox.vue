<template>
  <nav class="language-box box">
    <ul>
      <li v-for="item in getLangs" :key="item">
        <button @click="changeLanguage(item)">{{ item.toUpperCase() }}</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="js">
import { mapGetters, mapActions } from 'vuex'; 

export default {
  name: "language-box",
  components: {

  },
  props: [
    
  ],
  mounted() {},
  computed: {
    ...mapGetters({
		getLangs: "settings/getBlogLanguages",
		getPostUuid: "post/basic/getUuid"
    })
  },
  methods: {
	...mapActions({
		fetchDifferentLanguagePost: "fetchDifferentLanguagePost"
	}),
	changeLanguage(lang) {
		this.fetchDifferentLanguagePost(lang);
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.language-box {
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1 1 auto;
    list-style: none;

    & > li {
      margin: 0 0.5rem;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      button {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        background: hsl(244, 100%, 63%);
        color: hsl(0, 0%, 95%);
        border: 0;
      }
    }
  }
}
</style>
