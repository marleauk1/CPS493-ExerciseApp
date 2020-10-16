<template>
  <div>
    <WorkoutPost 
      v-for="(x, i) in users[0].workouts"
      :key="i"
      :user="x"
      v-bind:date="x.date"
      v-bind:type="x.type"
      v-bind:time="x.time" />
  </div>
</template>

<script>
import WorkoutPost from "@/components/WorkoutPost.vue";

import { users } from "@/models/users.js";

export default {
  data: () => ({
    users
  }),
  components: {
    WorkoutPost
  }
};
</script>

<style>
</style>