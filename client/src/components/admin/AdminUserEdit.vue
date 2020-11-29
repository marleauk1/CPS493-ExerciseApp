<template>
  <div>
    <div class="field">
      <label class="label">Change First Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="First Name"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-edit"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid user name.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    FirstName: String,
    LastName: String,
    DOB: String,
    PrimaryEmail: String,
    User_Type: Number
  }
};
</script>

<style>
</style>