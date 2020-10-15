<template>
  <div>
    <div class="field">
      <label class="label">User Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="Enter user name"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user-plus"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid user name.</p>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />
          Give administrator privileges
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>