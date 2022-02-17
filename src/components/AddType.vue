<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="type.name"
          name="name"
        />
      </div>
      <button @click="saveType" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newType">Add</button>
    </div>
  </div>
</template>
<script>
import TypeDataService from "../services/TypeDataService";
export default {
  name: "add-type",
  data() {
    return {
      type: {
        id: null,
        name: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveType() {
      var data = {
        name: this.type.name,
      };
      TypeDataService.create(data)
        .then((response) => {
          this.type.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newType() {
      this.submitted = false;
      this.type = {};
    },
  },
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
