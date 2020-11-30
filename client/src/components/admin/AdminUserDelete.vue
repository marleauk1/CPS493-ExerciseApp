<template>
  <div>
    <div class="field">
      <label class="label">Type "delete" to confirm deletion.</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="text" v-model="confirmDelete" />
        <span class="icon is-small is-left">
          <i class="fas fa-user-slash"></i>
        </span>
      </div>
    </div>

    <button class="button is-danger" v-on:click.prevent="deleteUser">
      Delete User {{ id }}
    </button>
  </div>
</template>

<script>
import { deleteUser } from "@/models/users";

export default {
  data: () => ({
    confirmDelete: "",
  }),
  methods: {
    async deleteUser() {
      if (this.confirmDelete == "delete") {
        const response = await deleteUser(this.id);
        return response;
      }
    },
  },
  props: {
    id: Number,
  },
};
</script>

<style>
</style>