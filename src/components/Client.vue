<template>
  <div v-if="currentClient" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Name</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentClient.name"
        />
      </div>
      <div class="form-group">
        <label for="url">Url</label>
        <input
          type="text"
          class="form-control"
          id="url"
          v-model="currentClient.site_url"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentClient.description"
        />
      </div>
    </form>
    <!-- <button
      v-if="currentClient.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      @click="updatePublished(true)"
    >
      Publish
    </button> -->
    <button class="btn btn-warning" @click="deleteClient">
      Delete
    </button>
    <button class="btn btn-primary" type="submit" @click="updateClient">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Client...</p>
  </div>
</template>
<script>
import ClientDataService from "../services/ClientDataService";
export default {
  name: "client",
  data() {
    return {
      currentClient: null,
      message: "",
    };
  },
  methods: {
    getClient(id) {
      ClientDataService.get(id)
        .then((response) => {
          this.currentClient = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // updatePublished(status) {
    //   var data = {
    //     id: this.currentClient.id,
    //     name: this.currentClient.title,
    //     description: this.currentClient.description,
    //     published: status,
    //   };
    //   ClientDataService.update(this.currentClient.id, data)
    //     .then((response) => {
    //       console.log(response.data);
    //       this.currentClient.published = status;
    //       this.message = "The status was updated successfully!";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    updateClient() {
      ClientDataService.update(this.currentClient.id, this.currentClient)
        .then((response) => {
          console.log(response.data);
          this.message = "The client was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteClient() {
      ClientDataService.delete(this.currentClient.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "clients" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getClient(this.$route.params.id);
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
