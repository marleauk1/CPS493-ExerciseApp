<template>
  <div class="mx-6">
    <div class="tabs is-centered is-fullwidth">
      <ul>
        <li :class="{ 'is-active': addTab }" @click="addTab = true">
          <a>Add Exercise</a>
        </li>
        <li :class="{ 'is-active': !addTab }" @click="addTab = false">
          <a>Exercise History</a>
        </li>
      </ul>
    </div>
    <AddExercise class="mx-4" v-if="addTab" />
    <ExerciseHistory class="mx-4" v-if="!addTab" />
  </div>
</template>

<script>
import AddExercise from "@/components/AddExercise";
import ExerciseHistory from "@/components/ExerciseHistory";

export default {
  data: () => ({
    addTab: true,
  }),
  methods: {},
  components: {
    AddExercise,
    ExerciseHistory,
  },
};
</script>

<style>
</style>