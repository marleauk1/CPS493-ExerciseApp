<template>
  <div class="mx-6">
    <div class="tabs is-centered is-fullwidth">
      <ul>
        <li :class="{ 'is-active': addTab }" @click="addTab = true">
          <a>Add Workout</a>
        </li>
        <li :class="{ 'is-active': !addTab }" @click="addTab = false">
          <a>Workout History</a>
        </li>
      </ul>
    </div>
    <AddWorkout class="mx-4" v-if="addTab" />
    <WorkoutHistory class="mx-4" v-if="!addTab" />
  </div>
</template>

<script>
import AddWorkout from "@/components/AddWorkout";
import WorkoutHistory from "@/components/WorkoutHistory";

export default {
  data: () => ({
    addTab: true,
  }),
  methods: {},
  components: {
    AddWorkout,
    WorkoutHistory,
  },
};
</script>

<style>
</style>