<template>
  <div>
    <WorkoutPost 
      v-for="(x, i) in workouts"
      :key="i"
      :user="x"
      v-bind:date="x.date"
      v-bind:type="x.type"
      v-bind:time="x.time" />
  </div>
</template>

<script>
import WorkoutPost from "@/components/WorkoutPost.vue";

export default {
  components: {
    WorkoutPost
  },
  props: {
    workouts: Object,
  }
};
</script>

<style>

</style>