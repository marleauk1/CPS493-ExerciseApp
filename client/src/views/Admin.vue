<template>
  <div class="mx-6">
    <div class="tabs is-centered is-fullwidth">
      <ul>
        <li :class="{ 'is-active': firstTab }" @click="firstTab = true">
          <a>Manage Exercises</a>
        </li>
        <li :class="{ 'is-active': !firstTab }" @click="firstTab = false">
          <a>Manage Users</a>
        </li>
      </ul>
    </div>
    <AdminExerciseManage class="mx-4" v-if="firstTab" />
    <AdminUserManage class="mx-4" v-if="!firstTab" />
  </div>
</template>

<script>
import AdminExerciseManage from "@/components/admin/AdminExerciseManage";
import AdminUserManage from "@/components/admin/AdminUserManage";

export default {
  data: () => ({
    firstTab: true,
  }),
  methods: {},
  components: {
    AdminExerciseManage,
    AdminUserManage,
  },
};
</script>

<style>
</style>