<template>
  <div class="container">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by name"
          @keyup="queryForKeywords"
        />
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="{ active: index == currentIndex }"
            v-for="(type, index) in types"
            :key="index"
            @click="setActiveType(type, index)"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ type.name }}</td>
            <td>
              <!-- <router-link :to="'/types/' + type.id">Edit</router-link> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "types-list",
  props: {
    types: Array,
  },
  data() {
    return {
      currentType: null,
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    queryForKeywords(event) {
      this.$emit("searchKey", event.target.value);
    },
    setActiveType(type, index) {
      this.currentType = type;
      this.currentIndex = type ? index : -1;
    },
  },
};
</script>
<style lang="scss">
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
