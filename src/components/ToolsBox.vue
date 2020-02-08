<template>
  <div class="tools-box box">
    <div>
      <label for="status">Status</label>

      <select id="status" v-model="status">
        <option
          v-for="status in postStatuses"
          :value="status.name"
          :key="status.name"
        >{{ status.displayName }}</option>
      </select>
    </div>
    <div>
      <label for="published-date">Published Date:</label>
      <datetime
        id="published-date"
        v-model="publishedDate"
        type="datetime"
        format="DateTime.TIME_24_SIMPLE"
      ></datetime>
    </div>
    <div>Last updated: {{ updatedDate ? (new Date(updatedDate)).toISOString() : "" }}</div>
    <div>
      <label for="outdated">
        <input v-model="outdated" type="checkbox" id="outdated" />
        Outdated
      </label>
    </div>
    <div>
      <label for="migrated">
        <input v-model="migrated" type="checkbox" id="migrated" />
        Migrated
      </label>
    </div>
    <div v-if="migrated">
      <label for="migrationApproved">
        <input v-model="migrationApproved" type="checkbox" id="migrationApproved" />
        Migration Approved
      </label>
    </div>
    <div>
      <button @click="deletePost">Delete Post</button>
    </div>
    <div>
      <button @click="savePost">Save Post</button>
    </div>
    <div v-if="status !== 'published' || (status === 'published' && statusChanged)">
      <button @click="publishPost">Publish Post</button>
    </div>
  </div>
</template>

<script lang="js">
import { Datetime } from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';

export default {
  name: "tools-box",
  components: {
    datetime: Datetime
  },
  props: [
    
  ],
  data() {
    return {
      statusChanged: false
    }
  },
  mounted() {},
  async created() {
    //let res = await this.changeUuid("a");
  },
  computed: {
    status: {
      get() {
        return this.$store.getters["post/status/getStatus"];
      },
      set(value) {
        this.statusChanged = true;
        this.$store.dispatch("post/status/updateStatus", value);
      }
    },
    postStatuses: {
      get() {
        console.log(this.$store.getters["settings/getPostStatuses"])
        return this.$store.getters["settings/getPostStatuses"];
      }
    },
    outdated: {
      get() {
        return this.$store.getters["post/status/getOutdated"];
      },
      set(value) {
        this.$store.dispatch("post/status/updateOutdated", value);
      }
    },
    publishedDate: {
      get() {
        if (this.$store.getters["post/status/getPublishedDate"]) {
          let d = new Date();
          d.setTime(this.$store.getters["post/status/getPublishedDate"])
          return d.toISOString();
        }
        return "";
      },
      set(value) {
        console.log(value)
        this.$store.dispatch("post/status/updatePublishedDate", (new Date(value)).getTime())
      }
    },
    updatedDate: {
      get() {
        if (this.$store.getters["post/status/getPublishedDate"]) {
          let d = new Date();
          d.setTime(this.$store.getters["post/status/getPublishedDate"])
          return d.toISOString();
        }
        return "";
      }
    },
    migrated: {
      get() {
        return this.$store.getters["post/status/getMigrated"];
      },
      set(value) {
        this.$store.dispatch("post/status/updateMigrated", value)
      }
    },
    migrationApproved: {
      get() {
        return this.$store.getters["post/status/getMigrationApproved"];
      },
      set(value) {
        this.$store.dispatch("post/status/updateMigrationApproved", value)
      }
    }
  },
  methods: {
    deletePost() {

    },
    savePost() {

    },
    publishPost() {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
