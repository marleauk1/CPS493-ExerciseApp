<template>
  <div>
    <div class="field">
      <label class="label">Exercise Name</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="Enter exercise name"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-plus"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid exercise name.</p>
    </div>

    <div class="control">
      <label class="label">Exercise Type</label>
      <div class="select">
        <select>
          <option>Time</option>
          <option>Time, Distance</option>
          <option>Sets, Reps </option>
          <option>Sets, Reps, Weight </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>