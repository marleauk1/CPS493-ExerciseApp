<template>
  <div>
    <div class="buttons has-addons is-centered">
      <button class="button is-link" @click="isAddingUser = true">
        <span class="icon is-small">
          <i class="fas fa-user-plus"></i>
        </span>
        <span>Add User</span>
      </button>
    </div>

    <AdminUserCard
      v-for="(x, i) in users"
      :key="i"
      :user="x"
      v-bind:username="x.username"
      v-bind:isAdmin="x.isAdmin"
      v-bind:workouts="x.workouts"
    />

    <!-- Add User Modal -->
    <div class="modal" :class="{ 'is-active': isAddingUser }">
      <div class="modal-background" @click="isAddingUser = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Adding User</p>
          <button
            class="delete"
            aria-label="close"
            @click="isAddingUser = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <AdminUserAdd />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Add User</button>
          <button class="button" @click="isAddingUser = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import AdminUserCard from "@/components/admin/AdminUserCard.vue";
import AdminUserAdd from "@/components/admin/AdminUserAdd.vue";

import { users } from "@/models/users.js"

export default {
  data: () => ({
    isAddingUser: false,
    users
  }),
  components: {
    AdminUserCard,
    AdminUserAdd,
  },
};
</script>

<style>
</style>