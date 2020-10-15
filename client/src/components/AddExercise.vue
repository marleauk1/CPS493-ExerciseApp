<template>
  <div>
    <div class="field">
      <label class="label">Exercise</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Time in Minutes</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="text"
          placeholder="Total time in minutes"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-stopwatch"></i>
        </span>
      </div>
      <p class="help is-danger">Please enter a valid time.</p>
    </div>

    <div class="field">
      <label class="label">Notes</label>
      <div class="control">
        <textarea class="textarea" placeholder="Notes about your exercise"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <button class="button is-success">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        <span>Save Exercise</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>