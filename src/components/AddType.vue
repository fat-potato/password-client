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
export default {
  name: "add-type",
  props: {
    submitted: Boolean,
    type: Object,
  },
  methods: {
    saveType() {
      this.$emit("saveType", this.type.name);
    },

    newType() {
      this.$emit("newType");
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
