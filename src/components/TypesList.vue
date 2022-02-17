<template>
  <div class="container">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by name"
          v-model="search"
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
            v-for="(type, index) in filteredTypes"
            :key="index"
            @click="setActiveType(type, index)"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ type.name }}</td>
            <td>
              <router-link :to="'/types/' + type.id">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import TypeDataService from "../services/TypeDataService";
export default {
  name: "types-list",
  data() {
    return {
      search: "",
      types: [],
      currentType: null,
      currentIndex: -1,
      name: "",
    };
  },
  computed: {
    filteredTypes() {
      return this.types.filter((type) => {
        return (
          type.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
  methods: {
    retrieveTypes() {
      TypeDataService.getAll()
        .then((response) => {
          this.types = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTypes();
      this.currentType = null;
      this.currentIndex = -1;
    },
    setActiveType(type, index) {
      this.currentType = type;
      this.currentIndex = type ? index : -1;
    },

  },
  mounted() {
    this.retrieveTypes();
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
