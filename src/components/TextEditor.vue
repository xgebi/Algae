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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component
export default class TextEditor extends Vue {
  @Prop() private msg!: string;

  @Getter("getInitialState") initial: any;

  private pikachu = 3;
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
