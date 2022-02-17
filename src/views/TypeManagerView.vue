<script>
import AddType from "@/components/AddType.vue";
import TypesList from "@/components/TypesList.vue";

import TypeDataService from "../services/TypeDataService";

export default {
  components: {
    AddType,
    TypesList,
  },
  data() {
    return {
      search: "",
      types: [],
      type: {
        id: null,
        name: "",
      },
      submitted: false,
    };
  },
  computed: {
    filteredTypes() {
      return this.types.filter((type) => {
        return type.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
  methods: {
    retrieveTypes() {
      TypeDataService.getAll()
        .then((response) => {
          this.types = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveTypes();
    },
    newType() {
      this.submitted = false;
      this.type = {};
    },
    saveType(name) {
      var data = {
        name: name,
      };
      TypeDataService.create(data)
        .then((response) => {
          this.type.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    searchKey(k) {
      this.search = k;
    },
  },

  mounted() {
    this.retrieveTypes();
  },
};
</script>

<template>
  <div class="container">
    <AddType
      :submitted="this.submitted"
      :type="this.type"
      @save-type="saveType"
      @new-type="newType"
    />
    <TypesList :types="this.filteredTypes" @search-key="searchKey" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
