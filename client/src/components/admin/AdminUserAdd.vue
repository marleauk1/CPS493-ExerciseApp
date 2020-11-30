<template>
  <div>
    <div class="field">
      <label class="label">First Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="FirstName"
          v-model="userData.FirstName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid first name.</p>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="LastName"
          v-model="userData.LastName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid last name.</p>
    </div>

    <div class="field">
      <label class="label">DOB</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="DOB"
          v-model="userData.DOB"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid DOB.</p>
    </div>

    <div class="field">
      <label class="label">Primary Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="PrimaryEmail"
          v-model="userData.PrimaryEmail"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid email.</p>
    </div>

    <div class="field">
      <label class="label">User Type</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="User_Type"
          v-model="userData.User_Type"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">
        Please enter "8" for admin, "9" for regular user.
      </p>
    </div>
    <button class="button is-success" v-on:click.prevent="registerUser">
      Add User
    </button>
  </div>
</template>

<script>
import { registerUser } from "@/models/users";

export default {
  data: () => ({
    userData: {
      FirstName: "",
      LastName: "",
      DOB: "",
      PrimaryEmail: "",
      User_Type: "",
    },
  }),
  methods: {
    async registerUser() {
      const response = await registerUser(this.userData);
      return response;
    },
  },
};
</script>

<style>
</style>