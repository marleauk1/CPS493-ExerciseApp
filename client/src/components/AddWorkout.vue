<template>
  <div>
    <div class="field">
      <label class="label">Workout</label>
      <div class="control">
        <div class="select">
          <select id="type">
            <option v-for="workout in workoutTypes" :key="workout.type">
              {{ workout.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Time in Minutes </label>
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

    <div class="field is-grouped">
      <button class="button is-success">
        <span class="icon is-small">
          <i class="fas fa-check"></i>
        </span>
        <span>Save Workout</span>
      </button>
    </div>
  </div>
</template>

<script>
import { workoutTypes } from "@/models/workouts.js";

export default {
  data: () => ({
    workoutTypes,
  }),
};
</script>

<style>
</style>