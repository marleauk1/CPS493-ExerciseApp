<template>
  <div>
    <div class="field">
      <label class="label">Change First Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          v-bind:placeholder="userData.FirstName"
          v-model="thisUserData.FirstName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid first name.</p>
    </div>

    <div class="field">
      <label class="label">Change Last Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          v-bind:placeholder="userData.LastName"
          v-model="thisUserData.LastName"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid last name.</p>
    </div>

    <div class="field">
      <label class="label">Change DOB</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          v-bind:placeholder="userData.DOB"
          v-model="thisUserData.DOB"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid DOB.</p>
    </div>

    <div class="field">
      <label class="label">Change Primary Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          v-bind:placeholder="userData.PrimaryEmail"
          v-model="thisUserData.PrimaryEmail"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid email.</p>
    </div>

    <div class="field">
      <label class="label">Change User Type</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          v-bind:placeholder="userData.User_Type"
          v-model="thisUserData.User_Type"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">
        Please enter "8" for admin, "9" for regular user.
      </p>
    </div>

    <button class="button is-success" @click.prevent="editUser">
      Save Changes
    </button>
  </div>
</template>

<script>
import { editUser } from "@/models/users";

export default {
  data() {
    return {
      thisUserData: {
        id: Number,
        FirstName: String,
        LastName: String,
        DOB: String,
        PrimaryEmail: String,
        User_Type: Number,
      },
    };
  },
  props: {
    userData: {
      id: Number,
      FirstName: String,
      LastName: String,
      DOB: String,
      PrimaryEmail: String,
      User_Type: Number,
    },
  },
  methods: {
    async editUser() {
      const response = await editUser(this.thisUserData);
      return response;
    },
  },
};
</script>

<style>
</style>