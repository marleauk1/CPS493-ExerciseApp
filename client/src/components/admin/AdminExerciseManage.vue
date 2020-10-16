<template>
  <div>
    <div class="buttons has-addons is-centered">
      <button class="button is-link" @click="isAddingExercise = true">
        <span class="icon is-small">
          <i class="fas fa-plus"></i>
        </span>
        <span>Add Exercise</span>
      </button>
    </div>

    <AdminExerciseCard
      v-for="(x, i) in workoutTypes"
      :key="i"
      :workoutType="x"
      v-bind:name="x.name"
      v-bind:type="x.type"
    />

    <!-- Add Exercise Modal -->
    <div class="modal" :class="{ 'is-active': isAddingExercise }">
      <div class="modal-background" @click="isAddingExercise = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Adding Exercise</p>
          <button
            class="delete"
            aria-label="close"
            @click="isAddingExercise = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <AdminExerciseAdd />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Add Exercise</button>
          <button class="button" @click="isAddingExercise = false">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import AdminExerciseCard from "@/components/admin/AdminExerciseCard.vue";
import AdminExerciseAdd from "@/components/admin/AdminExerciseAdd.vue";

import { workoutTypes } from "@/models/workouts.js";

export default {
  data: () => ({
    isAddingExercise: false,
    workoutTypes,
  }),
  components: {
    AdminExerciseCard,
    AdminExerciseAdd,
  },
};
</script>

<style>
</style>