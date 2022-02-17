<template>
  <div class="container">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <!-- <input
          type="text"
          class="form-control"
          placeholder="Search by name"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchName"
          >
            Search
          </button>
        </div> -->

        <input
          type="text"
          class="form-control"
          placeholder="Search by name"
          v-model="search"
        />
      </div>
    </div>
    <!-- <div class="col-md-12">
      <h4>Clients List</h4>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllClients">
        Remove All
      </button>
    </div> -->
    <!-- <div class="col-md-6">
      <div v-if="currentClient">
        <h4>Client</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentClient.name }}
        </div>
        <div>
          <label><strong>Description:</strong></label>
          {{ currentClient.description }}
        </div>
        <div>
          <label><strong>Site Url:</strong></label>
          {{ currentClient.site_url }}
        </div>
        <router-link
          :to="'/clients/' + currentClient.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Client...</p>
      </div>
    </div> -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Url</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :class="{ active: index == currentIndex }"
            v-for="(client, index) in filteredClients"
            :key="index"
            @click="setActiveClient(client, index)"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ client.name }}</td>
            <td>{{ client.site_url }}</td>
            <td>{{ client.description }}</td>
            <td>
              <router-link :to="'/clients/' + client.id">Edit</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import ClientDataService from "../services/ClientDataService";
export default {
  name: "clients-list",
  data() {
    return {
      search: "",
      clients: [],
      currentClient: null,
      currentIndex: -1,
      name: "",
    };
  },
  computed: {
    filteredClients() {
      return this.clients.filter((client) => {
        return (
          client.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
  methods: {
    retrieveClients() {
      ClientDataService.getAll()
        .then((response) => {
          this.clients = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveClients();
      this.currentClient = null;
      this.currentIndex = -1;
    },
    setActiveClient(client, index) {
      this.currentClient = client;
      this.currentIndex = client ? index : -1;
    },
    removeAllClients() {
      ClientDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // searchName() {
    //   ClientDataService.findByName(this.name)
    //     .then((response) => {
    //       this.clients = response.data;
    //       this.setActiveClient(null);
    //       console.log(response.data);
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
  },
  mounted() {
    this.retrieveClients();
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
